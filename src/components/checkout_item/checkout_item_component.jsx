import React from 'react'
import './checkout_item_styles.scss'
import {connect} from 'react-redux'

import {clearitemsfromcart,addItem,removeitem} from '../../redux/Cart/cart.action'

function checkout_item_component({cartItem, clearItem,addItem,removeItem}) {
  const {name,imageUrl,price,quantity} =cartItem
  return (
    <div className='checkout-item'>
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
  <span className="name">{name}</span>
  <span className="quantity">
    <div onClick={()=>removeItem(cartItem)}className="arrow">&#10094;</div>
    <span className='value'>{quantity}</span>
    <div onClick={()=>addItem(cartItem)} className="arrow">&#10095;</div>
  </span>
  <span className="price">{price}</span>
      <div onClick={()=> clearItem(cartItem)} className="remove-button">&#10005;</div>
    </div>
  )
}

const mapdispatch = dispatch => ({
  clearItem: item => dispatch(clearitemsfromcart(item)),
  addItem:item => dispatch(addItem(item)),
  removeItem:item =>dispatch(removeitem(item))
})

export default connect(null,mapdispatch)(checkout_item_component)
