import React from 'react'
import SimpleSidebar from './ProductPage';
import CartList from '../Componants/CartList';
import Footer from '../Componants/Footer';


const Cart = () => {
  return (
    <>
      
      <SimpleSidebar>
        <CartList />
      </SimpleSidebar>
      {/* <Footer/> */}
     
    </>
  );
}

export default Cart
