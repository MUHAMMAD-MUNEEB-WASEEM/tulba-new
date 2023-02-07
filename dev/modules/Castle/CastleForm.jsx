import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "/styles/castle/castle.module.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CastleForm = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className={`p-4 ${styles.CastleForm}`}>
              <p>TYPICALLY RESPONDS IN 1-2 DAYS</p>
              <h2>Request Quote</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="number" placeholder="Phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="date" placeholder="mm /dd / yy" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Guest" />
                </Form.Group>
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  style={{ height: "150px" }}
                />
                <div className="text-justify">
                  <span>
                    By clicking “Send Request” you agree to sign up and accept
                    Wedding Wire’s <span className={styles.terms}>Terms of Use.</span>
                  </span>
                </div>
                <Button className={styles.btn}>SEND Request</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CastleForm;
