import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import commentsReducer from "./commentsReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  user: userReducer,
  comments: commentsReducer,
});

export default rootReducer;
