export const addItemTocart = (cartitems, cartItemadd) =>{
  const existingItem = cartitems.find(cartItem => cartItem.id === cartItemadd.id)

  if(existingItem){
    return cartitems.map(cartItem =>
      cartItem.id === cartItemadd.id ?
      {...cartItem, quantity: cartItem.quantity+1}
      : {...cartItem}
      
      )
  }

  return [...cartitems,{...cartItemadd, quantity:1}]
}

export const removeItemFromcart = (cartItems, cartitemtoremove) =>{
  const existingItem = cartItems.find(
    cartitem => cartitem.id === cartitemtoremove.id
  )

  if(existingItem.quantity === 1){
    return cartItems.filter(cartItem=> cartItem.id !== cartitemtoremove.id)
  }

  return cartItems.map(
    cartitem =>
    cartitem.id === cartitemtoremove.id ?
    {...cartitem, quantity: cartitem.quantity-1}:
    cartitem
  )
}