import React from 'react'
import './Car_icon_styles.scss'
import {ReactComponent as Shoppingicon} from '../../assets/carticon.svg'

import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/Cart/cart.action'
import {selectCartItemcount} from '../../redux//Cart/cart.selector'
function Cart_icon_component({toggleCartHidden, itemcount}) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <Shoppingicon className='shopping-icon'/>
    <span className='item-count'>{itemcount}</span>
    </div>
  )
}

const Mapdispatchtoprops = (dispath) =>({
  toggleCartHidden: ()=>dispath(toggleCartHidden())
})

// it will be keeping to render
const Mapstatetoprops = (state) =>({
  itemcount: selectCartItemcount(state)
})

export default connect(Mapstatetoprops,Mapdispatchtoprops)(Cart_icon_component)
