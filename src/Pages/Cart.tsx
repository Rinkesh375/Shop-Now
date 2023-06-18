import React from 'react'
import SimpleSidebar from './ProductPage';
import CartList from '../Componants/CartList';
import Footer from '../Componants/Footer';
import Navbar from '../Componants/Navbar';


const Cart = () => {
  return (
    <>
      
      <SimpleSidebar>
        <Navbar/>
        <CartList />
      <Footer/>
      </SimpleSidebar>
     
    </>
  );
}

export default Cart
