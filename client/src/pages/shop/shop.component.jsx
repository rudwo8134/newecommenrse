import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchcollectionstart} from '../../redux/shop/shop.action'
import CollectionsOverviewcontainer from '../../components/collections-overview/collections_overview_container'
import CollectionPagecontainer from '../collection/collection.container';




const ShopPage= ({fetchcollectionstart,match})=>{
  useEffect(()=>{
  fetchcollectionstart()
},[fetchcollectionstart])

  
    return(
      <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverviewcontainer} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPagecontainer} />
    </div>
  )
}



const dispatchmap = (dispatch) =>({
  fetchcollectionstart: () =>dispatch(fetchcollectionstart())
})

export default connect(null,dispatchmap)(ShopPage);
