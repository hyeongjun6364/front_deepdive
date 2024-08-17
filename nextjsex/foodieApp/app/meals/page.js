import Link from 'next/link'
import { getMeals } from '@/lib/meal'
import { Suspense } from 'react'

import classes from './page.module.css'
import MealsGrid from '../components/meals/meals-grid'
import Loading from './loading-out'

async function Meals() {
  const meals = await getMeals()

  return <MealsGrid meals={meals} />
}
function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorie Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}

export default MealsPage
