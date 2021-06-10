import './Cart.css';

const CartItem = props =>{
    let totalPrice = props.item.price * props.item.amount;

    return <div className = "cart-item">
        <h3>
            <button onClick = {() => props.removeItem(props.item.id)} className = "btn-remove">-</button>
            {props.item.name} x {props.item.amount}</h3>
        <p>Price: {`${totalPrice.toFixed(2)}`}</p>
    </div>
}

export default CartItem;