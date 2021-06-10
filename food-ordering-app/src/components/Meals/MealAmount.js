const MealAmount = props => {
    return (
        <div className = "meal-amount">
            <button onClick = {props.decrement} id = "meal-decrement">-</button>
            <label>{props.amount}</label>
            <button onClick = {props.increment} id = "meal-increment">+</button>
        </div>

    )
}

export default MealAmount;