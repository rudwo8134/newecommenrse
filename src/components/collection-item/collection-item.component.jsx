import React from 'react';
import {connect} from 'react-redux'
import {addItem} from '../../redux/Cart/cart.action'

import Custombutton from '../custom-button/custom-button.component'

import './collection-item.styles.scss';

const CollectionItem = ({item, additem}) => {
  const {imageUrl,name,price} = item
  
  return(
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <Custombutton onClick={()=>additem(item)} inverted>Add to cart</Custombutton>
  </div>
)}; 

const MapdispatchtoProps = (dispatch) =>({
  additem: item => dispatch(addItem(item))
})

export default connect(null,MapdispatchtoProps)(CollectionItem) ;
