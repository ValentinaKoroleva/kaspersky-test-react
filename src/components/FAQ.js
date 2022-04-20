import { Component, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;
  let iconSource = require("../assets/icons/minus.png");
  if (!isCurrentEventKey) iconSource = require("../assets/icons/plus.png");
  return (
    <div>
      <button
        type="button"
        style={{
          boxShadow: "0px 2px 4px rgba(35, 209, 174, 0.24)",
          borderRadius: "4px",
          backgroundColor: isCurrentEventKey ? "#23D1AE" : "white",
        }}
        onClick={decoratedOnClick}
      >
        <img className="icon" src={iconSource} alt="opened" />
      </button>
      {children}
    </div>
  );
}

class FAQ extends Component {
  render() {
    return (
      <Accordion>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="0">
              How many devices can I protect?
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut consequat?</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="1">Will I get the latest version?</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              You download the software straight from our website. Simply
              complete your payment order and the download link will appear on
              the order confirmation page. The same download link will ...
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="2">Will I get the latest version?</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              You download the software straight from our website. Simply
              complete your payment order and the download link will appear on
              the order confirmation page. The same download link will ...
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="3">Will I get the latest version?</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              You download the software straight from our website. Simply
              complete your payment order and the download link will appear on
              the order confirmation page. The same download link will ...
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="4">Will I get the latest version?</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              You download the software straight from our website. Simply
              complete your payment order and the download link will appear on
              the order confirmation page. The same download link will ...
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="5">Will I get the latest version?</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              You download the software straight from our website. Simply
              complete your payment order and the download link will appear on
              the order confirmation page. The same download link will ...
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="6">Will I get the latest version?</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              You download the software straight from our website. Simply
              complete your payment order and the download link will appear on
              the order confirmation page. The same download link will ...
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <ContextAwareToggle eventKey="7">Will I get the latest version?</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              You download the software straight from our website. Simply
              complete your payment order and the download link will appear on
              the order confirmation page. The same download link will ...
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
export default FAQ;
