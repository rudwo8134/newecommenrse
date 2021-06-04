import {createSelector} from 'reselect'

const Userselector = state => state.user;

export const selectCurrentuser = createSelector(
  [Userselector],
  (user) => user.currentUser
)