import {types} from '../actions/types';
const initialState = {
  authToken: null,
  user: null,
  error: {},
  postSavedByUser: [],
  uploadedPost: [],
  loading:false,
};

const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        authToken: payload.authToken,
      };

    case types.REQUEST_USERSDATA:
      return {
        ...state,
         loading: true,
      };
    case types.REQUEST_USERSDATA_SUCCESSS:
      return {
        ...state,
        user: payload,
        loading: false,
        
      };
    case types.REQUEST_USERSDATA_FAILURE:
      return {
        ...state,
        user: {},
        error: payload,
        loading: false,
      };

    case types.UPDATE_DATA_SUCCESS:
      return {
        ...state,
        user: {...state.user, ...payload},
      };

    case types.SAVED_POST_SUCCESS:
      //console.log("payload.postSaved",payload.postSaved);
      return {
        ...state,
        postSavedByUser: payload.postSavedByUser,
        user: {...state.user, savedpost: payload.postSaved},
      };
    case types.LIKED_POST_SUCCESS:
      return {
        ...state,
        user: {...state.user, likedPost: payload},
      };
    case types.LIKED_POST_FAILURE:
      return {
        ...state,
      };

    case types.POST_UPLOADED_SUCCESS:
      return {
        ...state,
        uploadedPost: payload,
      };
    case types.SAVED_POST_FAILURE:
      return {
        ...state,
      };
    case types.UPLOAD_POST_SUCCESS:
      console.log("...state.user.UploadedPostKey",...state.user.UploadedPostKey);
      console.log("payload",payload);
      return {
        ...state,
        user: {
          ...state.user,
          UploadedPostKey: [...state.user.UploadedPostKey, payload],
        },
      };
    case types.UPLOAD_POST_FAILURE:
      return {
        ...state,
      };

    case types.SIGNOUT_SUCCESS:
      return {
        initialState
      };

    default:
      return state;
  }
};

export default userReducer;
