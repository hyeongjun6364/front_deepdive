import React, { useContext } from 'react'
import { currencyFormatter } from '../util/CurrencyFormatter'
import  CartContext  from '../store/CartContext'
import Button from './UI/Button';
function MealItem({meal}) {
    const cartCtx = useContext(CartContext);
    function handleAddMealToCart(){
        cartCtx.addItem(meal)
    }
    return (
        <li key={meal.id} className='meal-item'>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className='meal-item-price'>{currencyFormatter.format(meal.price)}</p>
                <p>{meal.description}</p>
            </div>
            <p className="meal-item-actions" >
                <Button onClick={handleAddMealToCart}>
                    Add to Cart
                </Button>
            </p>
        </li>
    )
}

export default MealItem