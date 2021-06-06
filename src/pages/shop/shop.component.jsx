import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {fetchcollectionstartAsync} from '../../redux/shop/shop.action'
import Withspinner from '../../components/with_spinner/with_spinner'
import {selectcollectionFetching,selectiscollectionloaded} from '../../redux/shop/shop.selectors'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


const CollectionOverviewwithSpinner = Withspinner(CollectionsOverview)
const Collectionpagewithspinner = Withspinner(CollectionPage)

class ShopPage extends React.Component{

  componentDidMount(){
    const {fetchcollectionstartAsync} = this.props
    fetchcollectionstartAsync()

  }
  render(){
    const {match,isCollectionFetching, iscollectionloaded} = this.props
    return(
      <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewwithSpinner isLoading={!iscollectionloaded} {...props}/>} />
      <Route path={`${match.path}/:collectionId`} render={(props)=><Collectionpagewithspinner isLoading={!iscollectionloaded} {...props}/>} />
    </div>
  )
}
}

const mapStatetoprops = createStructuredSelector({
  isCollectionFetching: selectcollectionFetching,
  iscollectionloaded:selectiscollectionloaded
})

const dispatchmap = (dispatch) =>({
  fetchcollectionstartAsync: () =>dispatch(fetchcollectionstartAsync())
})

export default connect(mapStatetoprops,dispatchmap)(ShopPage);
