import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "../actions/postActions";
import { API_URL } from "../../api";

function* fetchPostsSaga() {
  try {
    const response = yield call(axios.get, `${API_URL}/posts`);
    yield put({
      type: FETCH_POSTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
}

function* fetchCommentsSaga(action) {
  try {
    const response = yield call(
      axios.get,
      `${API_URL}/posts/${action.payload}/comments`
    );
    yield put({
      type: FETCH_COMMENTS_SUCCESS,
      payload: { postId: action.payload, comments: response.data },
    });
  } catch (error) {
    yield put({
      type: FETCH_COMMENTS_FAILURE,
      payload: error.message,
    });
  }
}

export default function* postSaga() {
  yield takeLatest(FETCH_POSTS, fetchPostsSaga);
  yield takeLatest(FETCH_COMMENTS, fetchCommentsSaga);
}
