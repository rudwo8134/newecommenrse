import {takeLatest, put,all,call} from 'redux-saga/effects'

import  Useraction from './user.types'
import {auth,googleprovider,createUserProfileDocument,getcurrentuser,} from '../../firebase/firebase.utils'
import {SignInsuccess,SignInfailure,signoutSUCCESS,signoutFAILURE,signupSuccess,signupFailure} from './user.actions'
import UserActionTypes from './user.types'

export function* getSnapshotFromuserauth(userauth, additionalData){
  try{
    const userRef =yield call (createUserProfileDocument, userauth, additionalData)
    const userSnapshot = yield userRef.get()
    yield put(SignInsuccess({id:userSnapshot.id, ...userSnapshot.data()}))
  }catch(error){
    yield put(SignInfailure(error));
  }
}

export function* signinwithgoogle(){
  try{
    const {user} = yield auth.signInWithPopup(googleprovider)
    yield getSnapshotFromuserauth(user)
  }catch(Err){
    yield put(SignInfailure(Err));
  }
}
export function*signinwithemail({payload: {email,password}}){
  try{
    const {user} = yield auth.signInWithEmailAndPassword(email,password)
    yield getSnapshotFromuserauth(user)
  }catch(Err){
    put(SignInfailure(Err));
  }
}
export function* isUserauthenicated(){
  try{
    const userAuth = yield getcurrentuser()
    if(!userAuth) return;
    yield getSnapshotFromuserauth(userAuth)
  }catch(error){
    yield put(SignInfailure(error))
  }
}
export function* signout(){
  try{
    yield auth.signOut();
    yield put(signoutSUCCESS())
  }catch(error){
    yield put(signoutFAILURE(error))
  }
}

export function*Signup({payload:{email,password,displayName}}){
  try{
    const {user} = yield auth.createUserWithEmailAndPassword(email,password)
    yield put(signupSuccess({user, additionalData:{displayName}}))
  }catch(error){
    yield put(signupFailure(error))
  }
}

export function* signinafter({payload:{user,additionalData}}){
 yield getSnapshotFromuserauth(user,additionalData)
}
export function*signupsuccess(){
  yield takeLatest(UserActionTypes.CREATE_USER_SUCCESS, signinafter)
}

export function* ongooglesigninstart(){
  yield takeLatest(Useraction.GOOGLE_SIGN_IN_START,signinwithgoogle)
}

export function* onemailsigninstart(){
  yield takeLatest(Useraction.EMAIL_SIGN_IN_START,signinwithemail)
}

export function* checkUsersettion(){
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserauthenicated)
}

export function* signoutstart(){
  yield takeLatest(UserActionTypes.SIGN_OUT_START,signout)
}
export function* signupstart(){
  yield takeLatest(UserActionTypes.CREATE_USER_START,Signup)
}

export function* userSagas(){
  yield all([
    call(ongooglesigninstart),
    call(onemailsigninstart),
    call(checkUsersettion),
    call(signoutstart),
    call(signupstart),
    call(signupsuccess)
  ])
}