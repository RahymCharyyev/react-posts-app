import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserPosts } from "../redux/actions/userActions";
import { Col, Container, Row } from "react-bootstrap";
import Post from "./Post";
import Loader from "./Loader";

const UserPostList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { userPosts } = useSelector((state) => state.user);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setShowLoader(true);
      await dispatch(fetchUserPosts(userId));
      setShowLoader(false);
    };

    fetchData();
  }, [dispatch, userId]);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <Container fluid style={{ padding: "50px" }}>
          <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {userPosts.map((post) => (
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

export default UserPostList;
