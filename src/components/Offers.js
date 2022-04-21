import { Component } from "react";
import KInternetSecurity from "./KInternetSecurity";
import KSecurityCloud from "./KSecurityCloud";
import KTotalSecurity from "./KTotalSecurity";
import { Container, Col, Row } from 'react-bootstrap'

class Offers extends Component {
    render() {
        const bestChoice = require("../assets/best-choice.png")
        return (<Container>
            <Row>
                <Col >
                    <KInternetSecurity />
                </Col>
                <Col>
                    <KTotalSecurity />
                </Col>
                <Col>
                    <KSecurityCloud />
                </Col>
            </Row>



        </Container>
        )
    }
}



export default Offers;
