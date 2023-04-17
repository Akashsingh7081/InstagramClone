
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({reducer: rootReducer,
devTools:true,
middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;




