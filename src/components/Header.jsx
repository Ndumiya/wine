import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../components/Header.css";
import Menu from "./Menu";
import image from "../assets/wine-logo.jpg";

function Header() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <div className="left">
            <img id="wineLogo" src={image} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="basic" href="/">Home</Nav.Link>
            <Nav.Link id="basic" href="/contact">Contact</Nav.Link>
            <Nav.Link id="basic" href="/about">About</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item className="NavMenu" href="#action/3.1">
                <Menu />
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Sign up" id="basic-nav-dropdown">
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>

              <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
