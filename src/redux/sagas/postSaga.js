import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "../actions/postActions";

function* fetchPostsSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put({
      type: FETCH_POSTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
}

export default function* postSaga() {
  yield takeLatest(FETCH_POSTS, fetchPostsSaga);
}
