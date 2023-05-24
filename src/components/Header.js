import React from "react";
import { Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import img from "../assets/avatar.svg";
import Menu from "./Menu";

const Header = () => {
  const expand = false;

  return (
    <Navbar bg="light" expand={expand ? "lg" : ""} className="mb-3">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Меню</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Image src={img} width={30} height={30} />
              <span>Чарыев Рахим</span>
              <span>Email: r569837@gmail.com</span>
              <Menu />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
