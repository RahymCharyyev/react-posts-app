import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import postSaga from "./sagas/postSaga";
import userSaga from "./sagas/userSaga";
import commentsSaga from "./sagas/commentsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk, sagaMiddleware)
);

sagaMiddleware.run(postSaga);
sagaMiddleware.run(userSaga);
sagaMiddleware.run(commentsSaga);

export default store;
