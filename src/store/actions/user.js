import {types} from './types';

export function fetchUserData(userPhoneNum) {
  return {
    type: types.REQUEST_USERSDATA,
    payload: {userPhoneNum}
  };
}

export function fetchUserSuccess(user) {
  return {
    type: types.REQUEST_USERSDATA_SUCCESSS,
    payload: user,
  };
}

export function fetchUserFailure(error) {
  return {
    type: types.REQUEST_USERSDATA_FAILURE,
    payload: {},
    error: error,
  };
}


export function signout() {
  return {
    type: types.SIGNOUT,
    payload: {}
  };
}