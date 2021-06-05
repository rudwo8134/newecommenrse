import carttypes from './cart.types'

export const toggleCartHidden = () => ({
  type: carttypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) =>({
  type: carttypes.ADD_ITEM,
  payload: item
})

export const clearitemsfromcart = item =>({
  type: carttypes.CLEAR_ITEMS_FROM_CART,
  payload: item
})

export const removeitem = item =>({
  type: carttypes.REMOVE_ITEM,
  payload:item
})