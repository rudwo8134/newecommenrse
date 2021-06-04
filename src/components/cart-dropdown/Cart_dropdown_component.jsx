import React from 'react'
import Custombutton from '../custom-button/custom-button.component'
import './Cart_dropdown.style.scss'

import {connect} from 'react-redux'

import Cartitem from '../car-item/cart_item'
import {selectCartitems} from '../../redux/Cart/cart.selector'
import {createStructuredSelector} from 'reselect'

import {toggleCartHidden} from '../../redux/Cart/cart.action'

import {withRouter} from 'react-router-dom'

function Cart_dropdown_component({cartItem, history, dispatch}) {
  return (
    <div className= 'cart-dropdown'>
      <div className="cart-items">
   
      {
        cartItem.length ?
      cartItem.map(cartItem=>
        <Cartitem key={cartItem.id} item={cartItem}/>
        ):
        (<span className='empty-message'>Your cart is empty</span>)
        }

      </div>
      <Custombutton onClick={()=>{
      history.push('/checkout');
      dispatch(toggleCartHidden())
    }
    }>Go to Checkout</Custombutton>
    </div>
  )
}


const maptoprops = createStructuredSelector({
  cartItem: selectCartitems
})
export default withRouter(connect(maptoprops)(Cart_dropdown_component))
