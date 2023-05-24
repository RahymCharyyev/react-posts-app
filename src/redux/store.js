import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import postSaga from "./sagas/postSaga";
import userSaga from "./sagas/userSaga";

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk, sagaMiddleware)
);

sagaMiddleware.run(postSaga, userSaga);

export default store;
