import {types} from "../actions/types";
  const initialState = {
    // loading: false,
     posts:[],
     lastVisible: null,
      error: {},
      lastPost:false,
      postData: [],
      totalPostLength:null,
  };
  
  export default postsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case types.REQUEST_POSTSSDATA:
        return {
          ...state,
        };
      case types.REQUEST_POSTSSDATA_SUCCESS:
        return {
          ...state,
          posts: [...payload.list],
          lastVisible: payload.lastVisible,  
          totalPostLength:payload.totalPostLength,
        };
      case types.REQUEST_POSTSSDATA_FAILURE:
        return {
          ...state,
          posts: [],
          error: payload,
        };
       
        case types.REQUEST_POSTSSDATA_AFTER_PAGINATION:
          return {
            ...state,
          };
        case types.REQUEST_POSTSSDATA_AFTER_PAGINATION_SUCCESS:
          return {
            ...state,
            posts: [...state.posts,...payload.list],
            lastVisible: payload.lastVisible,
            lastPost: payload.list.length===0? (true):(false),
          };
        case types.REQUEST_POSTSSDATA_AFTER_PAGINATION_FAILURE:
          return {
            ...state,
            posts: {},
            error: payload,
          };
        case types.REQUEST_POSTSSDATA:
          return {
            ...state,
             
          };
        case types.UPLOADED_POST_DATA_SUCCESS:
          return {
            ...state,
            postData:  payload,
             
          };
        case types.UPLOADED_POST_DATA_FAILURE:
          return {
            ...state,
            postData: {},
            error: payload,
          };

      default:
        return state;
    }
  };











