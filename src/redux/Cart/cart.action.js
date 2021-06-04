import carttypes from './cart.types'

export const toggleCartHidden = () => ({
  type: carttypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) =>({
  type: carttypes.ADD_ITEM,
  payload: item
})