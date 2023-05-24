import React, { useState } from "react";
import { Accordion, Button, Card, Collapse, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../redux/actions/postActions";
import img from "../assets/avatar.svg";

const Post = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.posts.comments[post.id]);

  const toggleComments = () => {
    if (!isOpen && !comments) {
      dispatch(fetchComments(post.id));
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Link to={`/user/${post.userId}`}>
              <Card.Img
                variant="top"
                src={img}
                alt="Avatar"
                style={{ width: "50px", height: "50px" }}
              />
            </Link>
            <Container className="text-center">{post.title}</Container>
          </Accordion.Header>
          <Accordion.Body>
            <Container className="text-center">{post.body}</Container>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                onClick={toggleComments}
                aria-expanded={isOpen}
                aria-controls={`comments${post.id}`}
                className="mt-2 justify-content-center"
              >
                {isOpen ? "Скрыть комментарии" : "Показать комментарии"}
              </Button>
            </div>
            <Collapse in={isOpen}>
              <div id={`comments-${post.id}`} className="mt-3">
                {comments &&
                  comments.map((comment) => (
                    <div key={comment.id}>
                      <h5>{comment.email}</h5>
                      <p>{comment.body}</p>
                    </div>
                  ))}
              </div>
            </Collapse>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Post;
