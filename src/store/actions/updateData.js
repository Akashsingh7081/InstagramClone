import {types} from './types';

export function updateData(Uid,params) {
  return {
    type: types.UPDATE_DATA,
     payload: {Uid,params},
  };
}


export function postItem(Uid,randomKey,params) {
      console.log("202",Uid,randomKey,params);
  return {
    type: types.UPLOAD_POST,
     payload: {Uid,randomKey,params},
  };
}