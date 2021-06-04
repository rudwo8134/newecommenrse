import React from 'react'
import './cart_item_style.scss'


function cart_item({item:{imageUrl, price, name,quantity}}) {

  return (
    <div className="cart-item">
      <img src={imageUrl} alt='item'></img>
      <div className="item-details">
    <span className="name">{name}</span>
    <span className="price">
      {quantity} Ea * {price}$</span>
      </div>

      
    </div>
  )
}

export default cart_item
