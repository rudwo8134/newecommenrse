import Carttypes from './cart.types'

import {addItemTocart} from './cart.utils'

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
    default:
      return state
  }
}

export default cartReducer