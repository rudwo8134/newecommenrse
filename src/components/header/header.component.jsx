import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

import {connect} from 'react-redux'

import Carticon from '../cart-icon/Cart_icon_component'
import CartDropdown from '../cart-dropdown/Cart_dropdown_component'

import {createStructuredSelector} from 'reselect'
import {selectCarthidden} from '../../redux/Cart/cart.selector'
import {selectCurrentuser} from '../../redux/User/user.selector'

const Header = ({ currentUser, hidden}) => (
  <div className='header'>
    
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <Carticon/>
    </div>
    {hidden ?   null : <CartDropdown/> }
  </div>
);

const MapStatetoProps = createStructuredSelector({
  currentUser:selectCurrentuser,
  hidden:selectCarthidden
})

export default connect(MapStatetoProps)(Header);
