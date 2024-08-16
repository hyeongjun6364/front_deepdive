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

export function saveMeal(meal){
    meal.slug = slugify(meal.title,{lower:ture});// 모든문자를 소문자로 전달
    meal.instructions = xss(meal.instructions);
}