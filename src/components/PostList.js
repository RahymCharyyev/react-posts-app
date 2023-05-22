import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.props);

  useEffect(() => {
    // dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
