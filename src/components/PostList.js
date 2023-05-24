import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
import Post from "./Post";
import Loader from "./Loader";
import { Container, Row, Col } from "react-bootstrap";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setShowLoader(true);
      await dispatch(fetchPosts());
      setShowLoader(false);
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <Container fluid style={{ padding: "50px" }}>
          <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {posts.map((post) => (
              <Col key={post.id}>
                <Post post={post} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default PostList;
