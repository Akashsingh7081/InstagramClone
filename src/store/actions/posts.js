import {types} from './types';

export function postsData(postPerLoad) {
  return {
    type: types.REQUEST_POSTSSDATA,
    payload: postPerLoad,

  };
}

export function fetchMorePost(startAfter,postPerLoad) {
  return {
    type: types.REQUEST_POSTSSDATA_AFTER_PAGINATION,
    payload: {startAfter,postPerLoad}, 
  };
}

export function getUploadedData(key) {
  return {
    type: types.UPLOADED_POST_DATA,
    payload: key,
    
  };
}

export function postUploaded(keys) {
  
  return {
    type: types.POST_UPLOADED,
    payload: keys,
    
  };
}

export function likedPost(keys) {
  return {
    type: types.LIKED_POST,
    payload: keys,
    
  };
}




