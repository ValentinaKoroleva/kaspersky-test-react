import { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
class Header extends Component {
  render() {
    const logoSrc = require("../assets/logo.png");

    return (
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logoSrc}
              className="d-inline-block align-top"
              alt="Kaspersky logo"
            />
          </Navbar.Brand>
          <form>
            <select
              name="dropdown"
              style={{ background: "none", border: "none" }}
            >
              <option value="GBP" selected>
                GBP
              </option>
              <option value="...">...</option>
              <option value="...">...</option>
            </select>
          </form>
        </Container>
      </Navbar>
    );
  }
}
export default Header;
