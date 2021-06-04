import React from 'react'
import Custombutton from '../custom-button/custom-button.component'
import './Cart_dropdown.style.scss'

function Cart_dropdown_component() {
  return (
    <div className= 'cart-dropdown'>
      <div className="car-items"/>
      <Custombutton>Go to Checkout</Custombutton>
    </div>
  )
}

export default Cart_dropdown_component
