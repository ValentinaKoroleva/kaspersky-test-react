import { Component } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import './FAQ.css'

class Footer extends Component {
  render() {
    const fbIcon = require("../assets/icons/fb.png");
    const instIcon = require("../assets/icons/inst.png");
    const twitIcon = require("../assets/icons/Twitter.png");
    const youtIcon = require("../assets/icons/Youtube.png");
    const imgSize = 160;
    return (
      <Container style={{ color: '#999999', fontSize: '75%', lineHeight: '100%', backgroundColor: '#F2F2F2'}} fluid>
        <Row>
          <Col  xs={9}>
            <p style={{marginLeft: "1%"}} align="left">© 2020 AO Kaspersky Lab. All Rights Reserved.</p>
            <p style={{marginLeft: "1%"}} align="left">Adaptive security technology is based on the patent US7584508 B1: ‘Adaptive security for information devices’.</p>
            <Navbar>
                <Nav className="text-start" style={{ color: '#999999' }}>
                  <Nav.Link href="#home">Privacy Policy</Nav.Link>
                  <Nav.Link href="#features">Anti-Corruption Policy</Nav.Link>
                  <Nav.Link href="#pricing">Licence Agreement B2C</Nav.Link>
                  <Nav.Link href="#home">Licence Agreement B2B</Nav.Link>
                  <Nav.Link href="#features">Terms of Use</Nav.Link>
                  <Nav.Link href="#pricing">Refund Policy</Nav.Link>
                </Nav>
              </Navbar>
          </Col>
          <Col className="justify-content-right align-self-center">
            <Container style={{maxWidth: '90%'}} fluid>
              <Row>
                <Col>
                  <img style={{width: imgSize / 2 + "%", height: imgSize / 1.5  +"%" }} src={fbIcon} alt="Facebook"  />
                </Col>
                <Col>
                  <img style={{width: imgSize + "%", height: imgSize/ 1.5 + "%"}} src={instIcon} alt="Instagram" />
                </Col>
                <Col>
                  <img style={{width: imgSize + "%", height: imgSize / 1.5 + "%"}} src={twitIcon} alt="Twitter" /></Col>
                <Col>
                  <img style={{width: imgSize + "%", height: imgSize / 1.5 + "%"}} src={youtIcon} alt="Youtube" />
                </Col>
              </Row>
            </Container>
            <form>
              <select
                name="dropdown"
                style={{ font: 'Kaspersky Sans/16px Light', backgroundColor: 'white', borderRadius: '0px', borderColor: '#999999', border: '1.5px solid #CCCCCC', color: '#999999', boxShadow: 'none', margin: '1%', width:'80%' }}
                defaultValue="United Kingdom"
              >
                <option value="United Kingdom">
                  United Kingdom
                </option>
                <option value="...">...</option>
                <option value="...">...</option>
              </select>
            </form></Col>
        </Row></Container>

    )
  }
}
export default Footer;