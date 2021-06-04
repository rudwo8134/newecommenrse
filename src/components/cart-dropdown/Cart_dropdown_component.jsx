import React from 'react'
import Custombutton from '../custom-button/custom-button.component'
import './Cart_dropdown.style.scss'

import {connect} from 'react-redux'

import Cartitem from '../car-item/cart_item'
import {selectCartitems} from '../../redux/Cart/cart.selector'

function Cart_dropdown_component({cartItem}) {
  return (
    <div className= 'cart-dropdown'>
      <div className="cart-items">
   
      {cartItem.map(cartItem=>
        <Cartitem key={cartItem.id} item={cartItem}/>
        )}

      </div>
      <Custombutton>Go to Checkout</Custombutton>
    </div>
  )
}


const maptoprops = (state) =>({
  cartItem: selectCartitems(state)
})
export default connect(maptoprops)(Cart_dropdown_component)
