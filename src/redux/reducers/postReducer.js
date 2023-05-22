import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  TOGGLE_COMMENTS,
} from "../actions/postActions";

const initialState = {
  posts: [],
  isLoading: false,
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
      };
    case TOGGLE_COMMENTS:
      const postId = action.payload;
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              showComments: !post.showComments,
            };
          }
          return post;
        }),
      };
    default:
      return state;
  }
};

export default postReducer;
