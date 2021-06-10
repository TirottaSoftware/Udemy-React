import {useContext} from 'react';
import CartModal from './CartModal';
import CartItem from './CartItem';
import './Cart.css';
import CartContext from '../context/CartContext';

const Cart = (props) =>{ 
    const cartCtx = useContext(CartContext);
    
    const cartItems = cartCtx.items;

    let totalPrice = 0;
    cartItems.map(item => totalPrice += item.price * item.amount);

    const removeItem = id => {
        cartCtx.removeItemHandler(id);
    }

    return (
        <CartModal>
            <h1 className = "cart-title">Your Cart</h1>
            {cartItems.map(item => <CartItem removeItem = {removeItem} item = {item} />)}
            <div className = "modal-divider"></div>
            <h1 className = "cart-total ">Total: {`${totalPrice.toFixed(2)}`}</h1>
            <div className = "cart-modal-buttons">
                <button onClick = {props.cartHandler}>Close</button>
                <button id = "btn-order">Order</button>
            </div>
        </CartModal>
    )
}

export default Cart;