import {createSelector} from 'reselect'
import memoize from 'lodash.memoize'
import cartReducer from '../Cart/cart.reducer'




const selectorshop = state => state.shop

export const selectCollections = createSelector(
  [selectorshop],
  shop => shop.collections
)

export const selectCollectionforpreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

// Object key make the object to arry
export const selectCollection = memoize((collectionurlparam)=>
createSelector(
  [selectCollections],
  collections => collections[collectionurlparam]
))
// data normalization