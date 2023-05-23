import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
import { fetchComments } from "../redux/actions/commentsActions";
import Post from "./Post";
import Loader from "./Loader";

import { Alert, Container, Row, Col } from "react-bootstrap";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : posts.length === 0 ? (
        <Alert variant="info">No posts available</Alert>
      ) : (
        <Container fluid>
          <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {posts.map((post) => (
              <Col key={post.id}>
                <Post
                  post={post}
                  toggleComments={() => dispatch(fetchComments(post.id))}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default PostList;
