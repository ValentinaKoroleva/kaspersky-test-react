import { Component } from "react";
import { Container, Col, Row, ListGroup, Popover, OverlayTrigger, Dropdown } from 'react-bootstrap'
class KTotalSecurity extends Component {
    render() {
        const ktsSrc = require("../assets/total-security.png")
        const starsSrc = require("../assets/stars.png")
        const sizeKTS = '100%'
        const sizeStars = '100%'
        const checkSrc = require("../assets/icons/check.jpg")
        const infoSrc = require("../assets/icons/info.png")
        const sizeInfo = 20
        const numberSrc = require("../assets/numberKTS.png")
        const checkboxSrc = require("../assets/icons/Checkbox.png")
        const bestChoice = require("../assets/best-choice.png")

        const popover = (
            <Popover id="popover-basic">
                <Popover.Body>
                    And here's some <strong>amazing</strong> content. It's very engaging.
                    right?
                </Popover.Body>
            </Popover>
        );
        return (
            <Container className="offer" fluid>
                <Row style={{ backgroundColor: 'white' }}>
                    <Col>
                        <Row>
                            <Col xs={4}>
                                {/* <img className="tag-best" src={bestChoice} alt="best-choice"/> */}
                                <img style={{ width: sizeKTS, hight: sizeKTS }} src={ktsSrc} alt="kis-logo" />
                            </Col>
                            <Col xs={8}>
                                <p style={{ fontWeight: 'bold', fontSize: 'larger', margin: '0' }}>Kaspersky</p>
                                <p style={{ fontWeight: 'bold', fontSize: 'large', margin: '0' }}>Total Security</p>
                                <img style={{ width: sizeStars, hight: sizeStars }} src={starsSrc} alt="reviews" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span="2">
                                <ListGroup>
                                    <ListGroup.Item className="check-item">
                                        <img className="check" src={checkSrc} alt="check" />
                                        Complete security & privacy suite for PC, Mac & Mobile
                                    </ListGroup.Item>
                                    <ListGroup.Item className="check-item">
                                        <img className="check" src={checkSrc} alt="check" />
                                        Includes Kaspersky Password Manager & Kaspersky Safe Kids
                                    </ListGroup.Item>
                                </ListGroup>

                                <span style={{ color: '#666666' }}>2 User accounts</span>
                                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                    <img style={{ verticalAlign: 'top!important', width: sizeInfo / 2.5 + "%", height: sizeInfo + "%" }} src={infoSrc} alt="info" />
                                </OverlayTrigger>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: '#F2F2F2' }}>
                    <Col>
                        <p style={{ fontWeight: 'bold', fontSize: 'larger', margin: '0' }}>Choose your plan:</p>
                        <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <b>5 Devices, </b>1 Year
                            $49.99
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1">...</Dropdown.Item>
                            <Dropdown.Item eventKey="2">...</Dropdown.Item>
                            <Dropdown.Item eventKey="3">...</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        <p style={{ color: '#666666', textAlign: 'center' }}>Protect more devices</p>
                        <p style={{ color: '#FF3748', textAlign: 'center', fontSize: 'x-large', fontWeight: 'bold', padding:0, margin:0 }}>20% OFF</p>
                        <div className="d-flex justify-content-center">
                            <span  style={{ color: '#999999', textAlign: 'center', fontSize: 'large', fontWeight: '700', textDecoration: 'line-through', textDecorationColor: '#999999' }}>$59.99</span>
                            <OverlayTrigger className="d-flex align-self-end" trigger="click" placement="right" overlay={popover}>
                                <img style={{width: sizeInfo / 2.5 + "%", height: sizeInfo + "%" }} src={infoSrc} alt="info" />
                            </OverlayTrigger>
                        </div>
                        <p style={{textAlign:"center"}}><img  src={numberSrc} alt="number" /></p>
                        <button className="buy-button" type="button">Buy now</button>
                        
                        <p className="d-flex justify-content-center align-items-center" style={{ color: '#444444', fontSize:'medium' }}>
                            <img style={{margin: '3%'}} src={checkboxSrc} alt="checkbox" />
                            Auto-renewal
                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                <img style={{ verticalAlign: 'top!important', width: sizeInfo / 2.5 + "%", height: sizeInfo / 3 + "%",margin: '2%' }} src={infoSrc} alt="info" />
                            </OverlayTrigger>
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default KTotalSecurity;