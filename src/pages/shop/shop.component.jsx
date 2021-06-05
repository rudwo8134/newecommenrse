import React from 'react';

import CollectionOverview from '../../components/collection-overview/collection_overview_component'
import Collection from '../Collection/Collection'

import {Route} from 'react-router-dom'


const ShopPage = ({match}) => {
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path={`${match.path}/:collectionid`} component={Collection} />
      </div>
    );
}



export default ShopPage;
