import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "../actions/commentsActions";

function* fetchCommentsSaga(action) {
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`
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

export default function* commentsSaga() {
  yield takeLatest(FETCH_COMMENTS, fetchCommentsSaga);
}
