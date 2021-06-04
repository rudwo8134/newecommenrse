import React from 'react'
import './Car_icon_styles.scss'
import {ReactComponent as Shoppingicon} from '../../assets/carticon.svg'

import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/Cart/cart.action'

function Cart_icon_component({toggleCartHidden}) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <Shoppingicon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  )
}

const Mapdispatchtoprops = (dispath) =>({
  toggleCartHidden: ()=>dispath(toggleCartHidden())
})

export default connect(null,Mapdispatchtoprops)(Cart_icon_component)
