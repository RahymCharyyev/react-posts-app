import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, toggleComments } from "../redux/actions/postActions";
import Post from "./Post";
import Loader from "./Loader";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.props);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            toggleComments={() => dispatch(toggleComments(post.id))}
          />
        ))
      )}
    </div>
  );
};

export default PostList;
