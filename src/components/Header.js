import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Список постов
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            Обо мне
          </Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Text className="mr-3">
            <Image
              src={user.avatar}
              roundedCircle
              width={30}
              height={30}
              className="mr-2"
            />
            {user.name}
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
