import { Component } from "react";
// import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
class MainIdea extends Component {
  render() {
    const EnergySrc = require("../assets/Energizer.png");
    const EnergyLogoSrc = require("../assets/EnergizerLogo.png");
    const logoLarge = require("../assets/logo-large.png");
    const ampersand = require("../assets/&.png");
    const sizePic = '100%';
    const sizeLogo = '40%';
    const sizeAmpersand = '5%';
    const sizeEnergy = '40%';
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Row style={{marginTop:'10%'}}>
                <img style={{ width: sizeLogo, height: sizeLogo,  alignSelf:'middle',  }} src={logoLarge} alt="kaspersky-logo"></img>
                <img style={{ width: sizeAmpersand, height: sizeAmpersand, alignSelf:'middle', padding: 0, marginBottom:'1.5%',}} src={ampersand} alt="ampersand"></img>
                <img style={{ width: sizeEnergy, height: "20%" , alignSelf:'middle',}} src={EnergyLogoSrc} alt="Energyzer-logo"></img>
              </Row>
              <Row>
                <Col>
                  <p style={{fontWeight: 'bold', fontSize: 'x-large', padding: '1%'}}>
                    Enjoy 20$ free and save up to 60%
                    on your online security
                  </p>
                  <hr style={{width:'8%', border: '1px solid #444444'}}></hr>
                  <p>
                    Whatever you need to protect – your PC & mobile devices or your family’s entire digital world – we’ve got the security solutions you need. Our premium solutions are all Android compatible to make sure your mobile is as safe as your PC or laptops. </p>
                  <p>Select the solution that fits best your needs, click on “Buy now”, fill in your personal code received by email in the cart, your discount will apply.
                  </p>
                </Col>
              </Row>
              
              <Row>
                  <Col >
                  <a href="#terms">Terms & Conditions</a>
                  </Col>
                </Row>
            </Col>
            <Col span='3'>
              <img style={{ width: sizePic, height: sizePic }} src={EnergySrc} alt="Big-Mast-Head"></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default MainIdea;
