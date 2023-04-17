import userReducer from './userReducer';
import posts from './posts';
import chooseImages from './chooseImages';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    userReducer : userReducer,
    posts : posts,
    chooseImages: chooseImages,
});

export default rootReducer;
