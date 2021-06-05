import React from 'react'
import './collection_overview_Styels.scss'

import {selectCollectionforpreview} from '../../redux/shop/shop.selector'

import CollectionPreview from '../collection-preview/collection-preview'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

function collection_overview_component({collections}) {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  )
}

const mapstatetorpops = createStructuredSelector({
  collections:selectCollectionforpreview
})

export default connect(mapstatetorpops)(collection_overview_component)
