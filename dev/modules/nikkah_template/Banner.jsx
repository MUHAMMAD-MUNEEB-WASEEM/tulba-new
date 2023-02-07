import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "/styles/Rsvp/Rsvp.module.scss";

const Banner = () => {
  return (
    <>
      <Container fluid className="my-5">
        <Row>
          <Col lg={6} className={` ${styles.banner}`}>
            <Breadcrumb>
              <Breadcrumb.Item href="/" className={styles.brdcrumb}>Home</Breadcrumb.Item>
              <Breadcrumb.Item active className={styles.actbrdcrumb}>Shop Invites</Breadcrumb.Item>
            </Breadcrumb>
            <div >
              <h5>We got the best tools for your event, so hop on.</h5>
              <h1>WEDDING TEMPLATES</h1>
              <p>
                Get your items according to your budegt with our classic budget
                planner
              </p>
              {/* <Button 
              className={`my-4 ${styles.btn} !hidden`}
              >Browse More</Button> */}
            </div>
          </Col>
          <Col lg={6} className="p-0">
            <div className={styles.weddingbanner_img}></div>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;