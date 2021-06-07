import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'

import {selectcollectionFetching} from '../../redux/shop/shop.selectors'
import Withspinner from '../with_spinner/with_spinner'
import CollectionOverview from './collections-overview.component'

const Mapstatetoprops = createStructuredSelector({
  isLoading: selectcollectionFetching
})

const CollectionsOverviewContainer = compose(
  connect(Mapstatetoprops),
  Withspinner
)(CollectionOverview)

export default CollectionsOverviewContainer