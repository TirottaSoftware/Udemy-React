import React, {useContext, useState} from 'react';
import CartContext from '../context/CartContext';
import MealAmount from './MealAmount';
import './Meals.css';

const Meal = (props) => {
    const [amount, setAmount] = useState(1);
    const cartCtx = useContext(CartContext);
    const amountMin = 1;
    const amountMax = 5;

    const addItemHandler = (e) => {
        cartCtx.addItemHandler({
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            amount: amount
        });
    } 


    const handleAmountDecrement = () => {
        let updatedAmount = amount - 1;
        if(updatedAmount >= amountMin){
            setAmount(updatedAmount);
        }
    }

    const handleAmountIncrement = () => {
        let updatedAmount = amount + 1;
        if(updatedAmount <= amountMax){
            setAmount(updatedAmount);
        }
    }

    return(
        <div className = "meal">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <div className = "meal-options">
                <button onClick = {addItemHandler}>${`${props.price.toFixed(2)}`}</button>
                <MealAmount decrement  = {handleAmountDecrement} increment = {handleAmountIncrement} amount = {amount}/>
            </div>
        </div>
    )
}
export default Meal;