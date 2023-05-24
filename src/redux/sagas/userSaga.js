import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS,
} from "../actions/userActions";
import { API_URL } from "../../api";

function* fetchUser(action) {
  const userId = action.payload;
  try {
    const response = yield call(axios.get, `${API_URL}/users/${userId}`);
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_USER_FAILURE, payload: error.message });
  }
}

function* fetchUserPosts(action) {
  const userId = action.payload;
  try {
    const response = yield call(axios.get, `${API_URL}/posts?userId=${userId}`);
    yield put({ type: FETCH_USER_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_USER_FAILURE, payload: error.message });
  }
}

export default function* userSaga() {
  yield takeLatest(FETCH_USER, fetchUser);
  yield takeLatest(FETCH_USER_POSTS, fetchUserPosts);
}
