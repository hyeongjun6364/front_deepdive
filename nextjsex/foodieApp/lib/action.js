//서버에서만 실행되는 함수이다. async를 무조건 붙여줘야한다.
'use server'

import { redirect } from 'next/navigation'
import { saveMeal } from './meal'
import { revalidatePath } from 'next/cache'

function isInvalidText(text) {
  return !text || text.trim() === ''
}

export async function shareMeal(prevState, formData) {
  //form 객체 만들기
  const meal = {
    //name 속성중 title을 가져옴
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid Input.',
    }
  }
  await saveMeal(meal)
  revalidatePath('/meals', 'layout')
  redirect('/meals')
  //console.log(meal)
}
