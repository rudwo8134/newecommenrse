import {call,all} from 'redux-saga/effects'
import{shopsagas} from './shop/shop.saga'
import {userSagas} from './user/user_sagas'
import {cartsaga} from './cart/cart.saga'

export default function*rootSaga(){
  yield all([
    call(shopsagas),
    call(userSagas),
    call(cartsaga)
  ])
} 