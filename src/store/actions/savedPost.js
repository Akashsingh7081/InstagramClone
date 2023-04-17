import {types} from './types';

export function savedPost(key) {
    return {
      type: types.SAVED_POST,
      payload: {key}, 
    };
  }