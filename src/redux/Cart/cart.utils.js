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