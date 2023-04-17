
import {types} from "../actions/types";
const initialState = {
  image: {},
  key: null,
  
};

export default chooseImage = (state = initialState, {type, payload}) => {
  
  switch (type) {
    case types.CHOOSE_IMAGE:
      return {
        ...state,
        image:payload,
        
      };
    case types.GET_KEY_UPLOADED_POST:
      return {
        ...state,
        key:payload,
        
      };     
    
    default:
      return state;
  }
};

