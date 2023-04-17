
import { all,spawn } from 'redux-saga/effects';
 
import userDataInfo from './users-saga';

const rootSaga = function* rootSaga() {
  yield spawn(userDataInfo);
};

export default rootSaga;
