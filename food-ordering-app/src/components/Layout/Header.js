import React, {useContext} from 'react';
import './Layout.css';
import CartContext from '../context/CartContext';

const Header = (props) => { 
    const cartCtx = useContext(CartContext);

    return(
        <nav className = "navbar">
            <h1 className = "logo">TirottaEats</h1>
            <button onClick = {props.cartHandler}>Cart <span>{cartCtx.items.length}</span></button>
        </nav>
    )
}

export default Header;