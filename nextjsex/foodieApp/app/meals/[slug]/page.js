import React from 'react'
import classes from './page.module.css';
import Image from 'next/image';
import { getMeal } from '@/lib/meal';
import { notFound } from 'next/navigation';

function MealDetailPage({params}) {
  const meal =  getMeal(params.slug)
  if(!meal){
    //이 컴포넌트가 실행되는것을 멈추고 notFound함수를 실행한다.
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g,'<br/>')
  console.log(meal)
  return (
   <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image src={meal.image} alt={meal.title} fill/>
      </div>
      <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
          <p className={classes.summary}>{meal.summary}</p>
      </div>
    </header>
    <main>
      {/* 크로스 사이트 스크립트공격에 노출되기 때문에 dangerouslySetInnerHTML={{
        __html:'...'을 작성함 */}
      <p className={classes.instructions} dangerouslySetInnerHTML={{
        __html:meal.instructions,
      }}></p>
    </main>
   </>
  )
}

export default MealDetailPage