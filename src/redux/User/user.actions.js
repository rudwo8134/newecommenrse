import UserActionTypes  from './user.types';

export const googleSignInstart = () =>({
  type:UserActionTypes.GOOGLE_SIGN_IN_START
});
export const SignInsuccess = (user)=>({
  type:UserActionTypes.SIGN_IN_SUCCESS,
  payload:user
})
export const SignInfailure = (error)=>({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload:error
})

export const emailSignInstart = (emailpassword) =>({
  type:UserActionTypes.EMAIL_SIGN_IN_START,
  payload:emailpassword
});

export const checkUsersession = () =>({
  type:UserActionTypes.CHECK_USER_SESSION
})

export const signoutstart = ()=>({
  type:UserActionTypes.SIGN_OUT_START
})
export const signoutSUCCESS = ()=>({
  type:UserActionTypes.SIGN_OUT_SUCCESS
})
export const signoutFAILURE = (error)=>({
  type:UserActionTypes.SIGN_OUT_FAILURE,
  payload:error
})

export const signupStart  =(emailpassword)=>({
  type:UserActionTypes.CREATE_USER_START,
  payload:emailpassword
})
export const signupSuccess = ({user,additionalData})=>({
  type:UserActionTypes.CREATE_USER_SUCCESS,
  payload:{user, additionalData}
})
export const signupFailure = (error)=>({
  type:UserActionTypes.CREATE_USER_FAILURE,
  payload:error
})


