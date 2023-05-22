import {
  FETCH_USER,
  FETCH_USER_POSTS,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_POSTS_SUCCESS,
} from "../actions/userActions";

const initialState = {
  user: [],
  userPosts: [],
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
    case FETCH_USER_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_USER_POSTS_SUCCESS:
      return {
        ...state,
        userPosts: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
