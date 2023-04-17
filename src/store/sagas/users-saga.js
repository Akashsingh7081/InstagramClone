import {useId} from 'react';
import {put, call, takeEvery, takeLatest} from 'redux-saga/effects';
import {types} from '../actions/types';
import {
  getPostData,
  getMorePost,
  getUserPostData,
  savePost,
  getsavedPost,
  uploadedPost,
  postLikedByUser,
} from '../apis/posts';
import {
  getDetailsofUser,
  setUserData,
  updatedData,
  addUploadedPostToPostCollection,
  updateUploadedPost,
} from '../apis/userData';

function* getDetails(action) {
  const {userPhoneNum} = action.payload;
  try {
    const user = yield call(getDetailsofUser, userPhoneNum);
    yield call(setUserData, userPhoneNum);

    yield put({
      type: types.REQUEST_USERSDATA_SUCCESSS,
      payload: user,
    });
  } catch (err) {
    yield put({
      type: types.REQUEST_USERSDATA_FAILURE,
      payload: error,
    });
    console.log(err);
  }
}

function* getDetailsofPosts(action) {
  try {
    const postPerLoad = action.payload;
    const user = yield call(getPostData, postPerLoad);
    yield put({
      type: types.REQUEST_POSTSSDATA_SUCCESS,
      payload: user,
    });
  } catch (err) {
    yield put({
      type: types.REQUEST_POSTSSDATA_FAILURE,
      payload: error,
    });
    console.log(err);
  }
}
function* getDetailsOfPostsAfterPagination(action) {
  try {
    const {startAfter, postPerLoad} = action.payload;
    const user = yield call(getMorePost, startAfter, postPerLoad);

    yield put({
      type: types.REQUEST_POSTSSDATA_AFTER_PAGINATION_SUCCESS,
      payload: user,
    });
  } catch (err) {
    yield put({
      type: types.REQUEST_POSTSSDATA_AFTER_PAGINATION_FAILURE,
      payload: error,
    });
    console.log(err);
  }
}

function* getPostForProfileScreen(action) {
  try {
    const key = action.payload;
    const user = yield call(getUserPostData, key);
    yield put({
      type: types.UPLOADED_POST_DATA_SUCCESS,
      payload: user,
    });
  } catch (err) {
    yield put({
      type: types.UPLOADED_POST_DATA_FAILURE,
      payload: error,
    });
    console.log(err);
  }
}

function* updateUserData(action) {
  const {Uid, params} = action.payload;
  try {
    yield call(updatedData, Uid, params);

    yield put({
      type: types.UPDATE_DATA_SUCCESS,
      payload: params,
    });
  } catch (err) {
    yield put({
      type: types.UPDATE_DATA_FAILURE,
      payload: err,
    });
  }
}

function* postSavedByUser(action) {
  const {key} = action.payload;
  try {
    const postSaved = yield call(savePost, key);
   // console.log('postSavedsssss', postSaved);
    const postSavedByUser = yield call(getsavedPost, postSaved);
    console.log('postSavedByUsersssss', postSavedByUser);
    yield put({
      type: types.SAVED_POST_SUCCESS,
      payload: {postSaved, postSavedByUser},
    });
  } catch (err) {
    yield put({
      type: types.SAVED_POST_FAILURE,
      payload: err,
    });
  }
}

function* uploadPost(action) {
  const keys = action.payload;
  try {
    const uploadPostitem = yield call(uploadedPost, keys);
    yield put({
      type: types.POST_UPLOADED_SUCCESS,
      payload: uploadPostitem,
    });
  } catch (err) {
    yield put({
      type: types.POST_UPLOADED_FAILURE,
      payload: err,
    });
  }
}
function* likedPost(action) {
  const keys = action.payload;
  try {
    const postLiked = yield call(postLikedByUser, keys);
    yield put({
      type: types.LIKED_POST_SUCCESS,
      payload: postLiked,
    });
  } catch (err) {
    yield put({
      type: types.LIKED_POST_FAILURE,
      payload: err,
    });
  }
}

function* addAndUpdatePostToProfileSrc(action) {
  const {Uid, randomKey, params} = action.payload;
  try {
    yield call(addUploadedPostToPostCollection, Uid, params);
    yield call(updateUploadedPost, Uid, randomKey);
    yield put({
      type: types.UPLOAD_POST_SUCCESS,
      payload: randomKey,
    });
  } catch (err) {
    yield put({
      type: types.UPLOAD_POST_FAILURE,
      payload: err,
    });
  }
}

function* signOutFun() {
  try {
    yield put({
      type: types.SIGNOUT_SUCCESS,
      payload: {},
    });
  } catch (err) {
    yield put({
      type: types.SIGNOUT_FAILURE,
      payload: err,
    });
  }
}

export default function* userDataInfo() {
  yield takeLatest(types.REQUEST_USERSDATA, getDetails);
  yield takeLatest(types.REQUEST_POSTSSDATA, getDetailsofPosts);
  yield takeLatest(
    types.REQUEST_POSTSSDATA_AFTER_PAGINATION,
    getDetailsOfPostsAfterPagination,
  );
  yield takeLatest(types.UPLOADED_POST_DATA, getPostForProfileScreen);
  yield takeLatest(types.UPDATE_DATA, updateUserData);
  yield takeLatest(types.SAVED_POST, postSavedByUser);
  yield takeLatest(types.POST_UPLOADED, uploadPost);
  yield takeLatest(types.LIKED_POST, likedPost);
  yield takeLatest(types.UPLOAD_POST, addAndUpdatePostToProfileSrc);
  yield takeLatest(types.SIGNOUT, signOutFun);
}
