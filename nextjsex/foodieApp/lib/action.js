//서버에서만 실행되는 함수이다. async를 무조건 붙여줘야한다.
'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meal";

export async function shareMeal(formData){
    //form 객체 만들기
    const meal ={
      //name 속성중 title을 가져옴
      title:formData.get('title'),
      summary:formData.get('summary'),
      instructions:formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }
    await saveMeal(meal)
    redirect('/meals')
    //console.log(meal)
  }