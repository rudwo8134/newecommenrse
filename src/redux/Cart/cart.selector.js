import {createSelector} from 'reselect'

const selectCart = state => state.cart;

export const selectCartitems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)
// 위로 계속 올라간다 메모라이즈 셀렉터다
export const selectCartItemcount = createSelector(
  [selectCartitems],
  (cartItems) => cartItems.reduce((Quantity, cartItem)=> Quantity+cartItem.quantity, 0)
)

export const selectCarthidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

export const selectCartTotal = createSelector(
  [selectCartitems],
  (cartItems) => cartItems.reduce((Quantity, cartItem)=> Quantity+cartItem.quantity*cartItem.price, 0)
)