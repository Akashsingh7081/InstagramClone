import {types} from './types';

export function selectImg(imageUri) {
  return {
    type: types.CHOOSE_IMAGE,
    payload: imageUri,
  };
}

export function getKey(randomKey) {
return {
  type: types.GET_KEY_UPLOADED_POST,
  payload: randomKey,
};
}