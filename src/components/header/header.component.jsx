import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

import {connect} from 'react-redux'

import Carticon from '../cart-icon/Cart_icon_component'
import CartDropdown from '../cart-dropdown/Cart_dropdown_component'

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

const MapStatetoProps = ({user:{currentUser},cart:{hidden}}) =>({
  currentUser:currentUser,
  hidden:hidden
})

export default connect(MapStatetoProps)(Header);