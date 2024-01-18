import React, { useEffect, useState } from 'react'
import { currencyFormatter } from '../util/CurrencyFormatter';
import MealItem from './MealItem';
function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);
    async function fetchMeals() {
        try {
            const response = await fetch('http://localhost:3000/meals')
            const data = await response.json()
            setLoadedMeals(data)
        }
        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchMeals()
    }, [])
    return (
        <ul id="meals">
            {loadedMeals.map((meal)=>
            <MealItem key={meal.id} meal={meal}/>)}
        </ul>
    )
}

export default Meals