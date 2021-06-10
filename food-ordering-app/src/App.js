import React from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Layout/Hero';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';
import {useState} from 'react';
import CartProvider from './components/context/CartProvider';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCartClick = (e) =>{
      e.preventDefault();
      setModalOpen(!modalOpen);
  }

  return (
    <CartProvider>
      <Header cartHandler = {handleCartClick}/>
      {modalOpen ? <Cart cartHandler = {handleCartClick}/> : null}
      <Hero />
      <Meals/>
    </CartProvider>
  );
}

export default App;
