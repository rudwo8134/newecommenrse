import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux'
import {updatetheCollections} from '../../redux/shop/shop.action'
import Withspinner from '../../components/with_spinner/with_spinner'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {firestore, converCollectionssnapshottomap} from '../../firebase/firebase.utils'

const CollectionOverviewwithSpinner = Withspinner(CollectionsOverview)
const Collectionpagewithspinner = Withspinner(CollectionPage)

class ShopPage extends React.Component{
  state ={
    loading: true
  }
  unsubscribefromsnapshot = null;
  componentDidMount(){
    const {updatecollections} = this.props
    const collectionRef = firestore.collection('collections')    
    // fetch('https://firestore.googleapis.com/v1/projects/mart-db-343a5/databases/(default)/documents/collections')
    // .then(response =>response.json())
    // .then(collections => console.log(collections))
    collectionRef.get().then((snapshot)=>{
      const collectionsMap = converCollectionssnapshottomap(snapshot)
      updatecollections(collectionsMap);
      this.setState({loading:false})
    })

  }
  render(){
    const {match} = this.props
    const {loading} =this.state
    return(
      <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewwithSpinner isLoading={loading} {...props}/>} />
      <Route path={`${match.path}/:collectionId`} render={(props)=><Collectionpagewithspinner isLoading={loading} {...props}/>} />
    </div>
  )
}
}

const dispatchmap = (dispatch) =>({
  updatecollections: collectionsmap => dispatch(updatetheCollections(collectionsmap))
})

export default connect(null,dispatchmap)(ShopPage);
