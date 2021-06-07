import {takeLatest, call, put,all} from 'redux-saga/effects'

import {firestore,converCollectionssnapshottomap} from '../../firebase/firebase.utils'
import {fetchcollectionSucess,fetchcollectionFailure} from './shop.action'
import Shopactiontype from './shop.type';

export function*fetchcollectionsasync(){
try{
  const collectionRef = firestore.collection('collections')
  const snapshot = yield collectionRef.get();
  const collectionsMap =  yield call(converCollectionssnapshottomap, snapshot)
  yield put(fetchcollectionSucess(collectionsMap))
}catch(Error){
  yield put (fetchcollectionFailure(Error))
}
}

export function* fetchcollectionstart(){
  yield takeLatest(
    Shopactiontype.FETCH_COLLECTIONS_START,
    fetchcollectionsasync)
}

export function* shopsagas(){
  yield all(
    [
      call(fetchcollectionstart)
    ]
  )
}