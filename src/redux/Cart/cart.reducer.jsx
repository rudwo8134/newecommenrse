import Carttypes from './cart.types'

import {addItemTocart,removeItemFromcart} from './cart.utils'

const INITIAL_STATE ={
  hidden: true,
  cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case Carttypes.TOGGLE_CART_HIDDEN:
      return{
        ...state,
        hidden: !state.hidden
      }
    case Carttypes.ADD_ITEM:
      return{
        ...state,
        cartItems:addItemTocart(state.cartItems, action.payload)
      }
    case Carttypes.CLEAR_ITEMS_FROM_CART:
      return{
        ...state,
        cartItems: state.cartItems.filter(cartitem => cartitem.id !== action.payload.id)
      }
    case Carttypes.REMOVE_ITEM:
      return{
        ...state,
        cartItems: removeItemFromcart(state.cartItems,action.payload)
      }
    default:
      return state
  }
}

export default cartReducer