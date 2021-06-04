import UserTypes from './user.types'
export const setcurrentUser = user =>({
  type: UserTypes.SET_CURRENT_USER,
  payload: user
})

