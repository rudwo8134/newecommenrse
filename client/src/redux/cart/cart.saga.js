
import {all,call, takeLatest, put} from 'redux-saga/effects'


import UserActionTypes from '../user/user.types'
import {clearcart} from './cart.actions'


export function* clearcartonsignout(){
  yield put(clearcart())
}

export function* onSignoutSuccess(){
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearcartonsignout)
}

export function* cartsaga(){
  yield(all([
    call(onSignoutSuccess)
  ]))
}