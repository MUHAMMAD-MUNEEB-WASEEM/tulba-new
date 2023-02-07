import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Venue_content from './Venue_content';
import styles from "/styles/venue/venue.module.scss";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import { Stepper, Step } from 'react-form-stepper';

const percentage = 75;

const Venue_banner = () => {
  return (
    <>
      <Container fluid
        className={styles.venue}
      >
        <Row>
          <Col lg={3} md={6}>
            <div className="d-flex">
              <div>
                <Venue_content
                  client="/../assests/home_img/Male 1.svg"
                />
              </div>
              <div className={styles.img}>
                <Venue_content
                  client="/../assests/home_img/Female 1.svg"
                />
              </div>
            </div>
          </Col>

          <Col lg={7} md={6}>
            <div className='mx-5 my-4'>
              <h1>Zeeshan And Mariyam Weds</h1>
              <p>Enter your wedding details and get the record of all the required data of your wedding.</p>
            </div>
          </Col>
          <Col lg={2}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />

          </Col>
        </Row>
        <Row className="my-5">
          <p className='text-center'>Complete the Below process for your wedding to get started</p>
          {/* <Stepper activeStep={2}>
            <Step label=" Complete Your Profile" />
            <Step label=" Add Your Event" />
            <Step label=" Shop Invites & Nikkah Template" />
            <Step label=" Guest account" />
          </Stepper> */}
        </Row>
      </Container>
    </>
  );
};

export default Venue_banner;