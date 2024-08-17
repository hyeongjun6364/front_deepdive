//파일 시스템 api
import fs from 'node:fs'

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
//database에 연결
const db=sql('meals.db');

//async를 활용해 promise를 반환시키기
export async function getMeals(){
    //일반적으로 추가지연하는 함수를 넣진 않지만 로딩관련 실습을 해야하기에 적용함.
    await new Promise((resolve)=>setTimeout(resolve, 5000))

    //throw new Error('Loading meals failed');
    //모든요소를 다 선택하고 데이터 불러오기
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal){
    meal.slug = slugify(meal.title,{lower:true});// 모든문자를 소문자로 전달
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop(); //확장자 가져오기
    const fileName = `${meal.slug}.${extension}`; // 파일명 짓고

    const stream =  fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error){
            throw new Error('Saving image failed!');
        }
    });
    meal.image = `/images/${fileName}` // 모든 이미지에 관한 요청은 public으로 자동으로 요청되기에 public을 경로에서 빼기

    db.prepare(`
        INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES ( 
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
            )
    `).run(meal);//value와 속성의 순서가 같아야한다. 각 필드에 맞는 데이터가 자동 추출됨.

}