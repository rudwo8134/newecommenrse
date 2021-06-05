import React from 'react'
import './Collection.style.scss'

import Collectionitem from '../../components/collection-item/collection-item.component'

import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selector'

import cartReducer from '../../redux/Cart/cart.reducer'


function collectionPage({collection}) {
  const {title,items} = collection
  return (
    <div className="collection-page">
      <h2 className='title'>{title}</h2>
      <div className="items">
        {
          items.map(item=>
            <Collectionitem key={item.id} item={item}/>
            )
        }
      </div>
    </div>
  )
}

// second 는 props을 준다 그래서 프롭을 받아서 매치를 한것이다.
const mapStatetoprops = (state,ownprops)=>({
  collection: selectCollection(ownprops.match.params.collectionid)(state)
})

export default connect(mapStatetoprops)(collectionPage)
