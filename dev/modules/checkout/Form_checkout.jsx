import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from "styles/Form/Form.module.scss";


const Form_checkout = () => {
  return (
    <>
      <Container
        fluid
        className={`my-5 ${styles.forms}`}
      >
        <Row>
          <Col lg={6} sm={12}className="checkForms p-5">
            <h1>CheckOut</h1>
            <p className='mb-5'>All orders of your carts are here.</p>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} lg={6} sm={12}  controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" value="Waleed" />
                </Form.Group>

                <Form.Group as={Col} lg={6} sm={12} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} lg={6} sm={12} controlId="formGridEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group as={Col} lg={6} sm={12} controlId="formGridPassword">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Row>


              <Row className="mb-3">
                <Form.Group as={Col} lg={4} sm={12} controlId="formGridCity">
                  <Form.Label>Apt</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} lg={4} sm={12} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} lg={4} sm={12} controlId="formGridZip">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Col lg={8}>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>
              </Row>

              <Button type="submit"
                className={`mt-4 ${styles.check_btn}`}
              >
                Continue
              </Button>
            </Form>

          </Col>
          <Col lg={6} sm={12} xs={12}>
            <div className={`my-5 p-5 ${styles.orderSummary}`}>
              <h2>Order Summary</h2>
              <div className="d-flex justify-content-between py-3">
                <span>Subtotal</span>
                <span>$120</span>
              </div>
              <div className="d-flex justify-content-between py-3">
                <span>Tax</span>
                <span>$0</span>
              </div>
              <div className="d-flex justify-content-between py-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="d-flex justify-content-between py-3">
                <span>Quantity</span>
                <span>1</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between py-3">
                <h5>Total</h5>
                <h5>$120</h5>
              </div>
              <Button type="submit"
                className={`mt-2 ${styles.check_btn1}`}
              >
                Place Order
              </Button>
              <Row className="checkForms">
                <Col lg={7} className="mt-4">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Promo Code</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col lg={5} className="mt-5">
                  <Button variant="outline-danger" className={`mt-2 w-28 ${styles.applyBtn} `}>Apply Now</Button>{' '}
                </Col>
              </Row>
              <div className='my-3'>
                <span className={styles.acc}>Don’t have an account ? </span>
               <a href="#"> Create New</a>
                </div>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Form_checkout