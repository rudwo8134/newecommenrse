import ShopactionType from './shop.type'

export const updatetheCollections = (collectionmap)=>({
  type: ShopactionType.UPDATE_COLLECTIONS,
  payload: collectionmap
})