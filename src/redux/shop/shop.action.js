import ShopactionType from './shop.type'
import {firestore,converCollectionssnapshottomap} from '../../firebase/firebase.utils'

export const fetchcollectionstart = ()=>({
  type: ShopactionType.FETCH_COLLECTIONS_START
})

export const fetchcollectionSucess= (collectionsmap)=>({
  type:ShopactionType.FETCH_COLLECTIONS_SUCCESS,
  payload:collectionsmap
})
export const fetchcollectionFailure = (error) =>({
  type:ShopactionType.fetchcollectionFailure,
  payload:error
})

export const fetchcollectionstartAsync = ()=>{
  return dispatch => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchcollectionstart())  

    collectionRef.get().then((snapshot)=>{
      const collectionsMap = converCollectionssnapshottomap(snapshot)
      dispatch(fetchcollectionSucess(collectionsMap))
  }).catch(error =>dispatch(fetchcollectionFailure(error.message)))
}
}

// action = javascript.object

