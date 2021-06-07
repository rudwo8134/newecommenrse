import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import {selectiscollectionloaded} from '../../redux/shop/shop.selectors'
import Withspinner from '../../components/with_spinner/with_spinner'
import Collectionpage from './collection.component'

const mapStatetoprops = createStructuredSelector({
  isLoading: (state)=> !selectiscollectionloaded(state)
})

const collectionpagecontainer = compose(
  connect(mapStatetoprops),
  Withspinner
)(Collectionpage);

export default collectionpagecontainer