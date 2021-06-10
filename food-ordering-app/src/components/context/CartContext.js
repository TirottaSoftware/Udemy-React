import React from 'react';

const CartContext = React.createContext({
    totalPrice: 0,
    items:[],
    addItemHandler: (item) => {},
    removeItemHandler: (id) => {}
})

export default CartContext;