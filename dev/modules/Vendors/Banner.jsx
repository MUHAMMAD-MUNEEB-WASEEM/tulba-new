import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
// import Img from "public/assests/vendors/banner.svg";
import styles from "/styles/Rsvp/Rsvp.module.scss";
import style from "/styles/vendors/vendor.module.scss";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <Container fluid >
        <Row>
          <Col lg={6} className={`p-0 ${styles.banner}`}>
            <Breadcrumb>
              <Breadcrumb.Item href="#" className={styles.brdcrumb}><Link href='/'>Home </Link></Breadcrumb.Item>
              <Breadcrumb.Item active className={styles.actbrdcrumb}>Vendors</Breadcrumb.Item>
            </Breadcrumb>
            <div>
              {/* <div className='d-flex  justify-content-start'>
                <div className={`my-4  ${styles.head_border}`}></div>
                <h5>We got the best tools for your event, so hop on.</h5>
              </div> */}
              <h1>Vendors</h1>
              <p className={styles.bannerText}>
                Browse through the many vendors of your choice and <br />
                get the ultimate venue for your ultmiate wedding
              </p>
              {/* <Button
                className={`my-4 ${styles.btn}`}
              >Explore Vendors</Button> */}
            </div>
          </Col>
          <Col lg={6} className="p-0">
            <div className={style.vendorbanner_img}></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
