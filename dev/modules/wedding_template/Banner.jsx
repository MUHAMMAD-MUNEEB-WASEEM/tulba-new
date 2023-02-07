import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "/styles/Rsvp/Rsvp.module.scss";

const Banner = () => {
  return (
    <div>
        <Container fluid className="my-5">
        <Row>
          <Col lg={6} className={`px-5 ${styles.banner}`}>
            <Breadcrumb>
              <Breadcrumb.Item href="#"  className={styles.brdcrumb}>Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#"  className={styles.brdcrumb}>Vendors</Breadcrumb.Item>
              <Breadcrumb.Item active className={styles.actbrdcrumb}>Wedding Template</Breadcrumb.Item>
            </Breadcrumb>
            <div>
              <h5>We got the best tools for your event, so hop on.</h5>
              <h1>Wedding Template</h1>
              <p>
              Get your items according to your budegt with our classic budget planner
              </p>
              <Button 
              className={`my-4 ${styles.btn}`}
              >Browse More</Button>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.wedbanner_img}></div>
            {/* <Image 
            src={Img}
            layout="responsive"
            /> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner