import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "../actions/postActions";

const initialState = {
  posts: [],
  comments: {},
  isLoading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.postId]: action.payload.comments,
        },
        isLoading: false,
        error: null,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
