import {types} from './types';

export function editUserName(text) {
  return {
     type: types.EDIT_USER_NAME,
     payload: text,
  };
}

export function editProfileName(text) { 
  return {
    type: types.EDIT_PROFILE_NAME,
     payload: text,
  };
}

export function editWebsiteUrl(text) {  
  return {
    type: types.EDIT_WEBSITE_URL,
     payload: text,
  };
}
export function editBio(text) {  
  return {
    type: types.EDIT_BIO,
     payload: text,
  };
}
export function editImage(text) {   
  return {
    type: types.EDIT_IMAGE,
     payload: text,
  };
}