import { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
class Header extends Component {
  render() {
    const logoSrc = require("../assets/logo.png");
    const sizeLogosm = '50%';
    return (
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logoSrc}
              style={{width: sizeLogosm, height: sizeLogosm}}
              className="d-inline-block align-center"
              alt="Kaspersky logo"
            />
          </Navbar.Brand>
          <form>
            <select
              name="dropdown"
              style={{ background: "none", border: "none" }}
              defaultValue = "GBP"
            >
              <option value="GBP">
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
