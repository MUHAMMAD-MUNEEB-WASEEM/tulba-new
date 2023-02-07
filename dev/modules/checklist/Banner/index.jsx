import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
// import Img from "public/assests/RSVP/banner.svg";
import styles from "/styles/checklist/Banner.module.scss";

const Banner = () => {
    return (
        <>
            <Container fluid className="my-5 p-0">
                <Row>
                    <Col lg={6} className={` ${styles.banner}`}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/" className={styles.brdcrumb}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#" className={styles.brdcrumb}>Event Planner</Breadcrumb.Item>
                            <Breadcrumb.Item active className={styles.actbrdcrumb}>Checklist</Breadcrumb.Item>
                        </Breadcrumb>
                        <div>
                            <div className='d-flex  justify-content-start'>
                                <div className={`my-4  ${styles.head_border}`}></div>
                                <h5>We got the best tools for your event, so hop on.</h5>
                            </div>
                            <h1 className="mb-2">Checklist</h1>
                            <p>
                                Get Listed all your wedding items and see their progress on the
                                go.
                            </p>
                            {/* <Button 
              className={`my-4 ${styles.btn}`}
              >Browse More</Button> */}
                            <div style={{ height: '100px' }}>

                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.banner_img}></div>
                        {/* <Image 
            src={Img}
            layout="responsive"
            /> */}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Banner;
