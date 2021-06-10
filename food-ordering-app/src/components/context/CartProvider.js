import React, {useReducer} from 'react';
import CartContext from './CartContext';

const defaultCartState = {
    items: [],
    totalPrice: 0,
}

const cartReducer = (state, action) => {
    if(action.type === "ADD_ITEM"){
        //Check if item already exists
        let updatedList;

        const updatedTotalPrice = state.totalPrice + action.payload.price * action.payload.amount;
        let existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
        const existingItem = state.items[existingItemIndex];

        if(existingItem){
            const udpatedItem = {...existingItem};
            udpatedItem.amount = existingItem.amount + action.payload.amount
            updatedList = [...state.items];
            updatedList[existingItemIndex] = udpatedItem;
        }
        else{
            updatedList = state.items.concat(action.payload);
        }
        return {
            items: updatedList,
            totalPrice: updatedTotalPrice
        }
    }
    else if(action.type === "REMOVE_ITEM"){
        let updatedList = [...state.items];
        let itemIndex = updatedList.findIndex(item => item.id === action.payload);
        updatedList.splice(itemIndex, 1);
        const updatedTotalPrice = state.totalPrice - state.items[itemIndex].price * state.items[itemIndex].amount;
        return{
            items: updatedList,
            totalPrice: updatedTotalPrice
        }
    }
}

const CartProvider = props => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

    const addItemHandler = item => {
        dispatchCart({type: "ADD_ITEM", payload: item});
    };
    const removeItemHandler = id => {
        dispatchCart({type: "REMOVE_ITEM", payload: id})
    };

    const cartContext = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItemHandler,
        removeItemHandler
    }

    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;