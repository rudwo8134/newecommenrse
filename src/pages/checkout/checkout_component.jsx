import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCartitems,selectCartTotal} from '../../redux/Cart/cart.selector'
import './checkout.style.scss'

import CheckoutItem from '../../components/checkout_item/checkout_item_component'
function checkout_component({cartItems,total}) {
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartitem=>
          <CheckoutItem key={cartitem.id}cartItem={cartitem}/>
          )
      }
      <div className='total'>
    <span>Total: ${total}</span>
      </div>
    </div>
  )
}
const mapstatetoprops = createStructuredSelector({
  cartItems:selectCartitems,
  total:selectCartTotal
})

export default connect(mapstatetoprops)(checkout_component)
