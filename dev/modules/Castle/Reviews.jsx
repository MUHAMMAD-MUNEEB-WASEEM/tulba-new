/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from "/styles/castle/castle.module.scss";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import Vector from "public/assests/castle/Ellipse1.svg";
import Vector1 from "public/assests/castle/Ellipse2.svg";
import Vector2 from "public/assests/castle/Ellipse3.svg";

const Reviews = () => {
    return (
        <div>
            <Container className="my-5">
                <Row className="my-2">
                    <Col lg={12} className={styles.review}>
                        <p>See our best reviews for this venue</p>
                        <h2>Reviews ( 15 )</h2>
                        <Row>
                            <Col lg={2}>
                                <span>5 Stars</span>
                            </Col>
                            <Col lg={8}>
                                <ProgressBar variant="warning" now={60} className="my-1" />
                            </Col>
                            <Col lg={2}>
                                <span>60%</span>
                            </Col>
                        </Row>


                        <Row className="my-2">

                            <Col lg={2}>
                                <span>4 Stars</span>
                            </Col>
                            <Col lg={8}>
                                <ProgressBar variant="warning" now={40} className="my-1" />
                            </Col>
                            <Col lg={2}>
                                <span>40%</span>
                            </Col>

                        </Row>
                        <Row className="my-2">

                            <Col lg={2}>
                                <span>3 Stars</span>
                            </Col>
                            <Col lg={8}>
                                <ProgressBar variant="warning" now={0} className="my-1" />
                            </Col>
                            <Col lg={2}>
                                <span>0%</span>
                            </Col>

                        </Row>
                        <Row className="my-2">

                            <Col lg={2}>
                                <span>2 Stars</span>
                            </Col>
                            <Col lg={8}>
                                <ProgressBar variant="warning" now={0} className="my-1" />
                            </Col>
                            <Col lg={2}>
                                <span>0%</span>
                            </Col>

                        </Row>
                        <Row className="my-2">

                            <Col lg={2}>
                                <span>1 Stars</span>
                            </Col>
                            <Col lg={8}>
                                <ProgressBar variant="warning" now={0} className="my-1" />
                            </Col>
                            <Col lg={2}>
                                <span>0%</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div >
                                    <p>Submit your experience on us</p>
                                    <div className="d-flex justify-content-between">
                                    <h2>Leave a Review</h2>
                                    <div className='d-flex justify-content-center mt-4'>
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        </div>
                                    </div>

                                </div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Type Your Review"
                                    style={{ height: "200px" }}
                                />
                                <Button className={styles.btn}>Submit Review</Button>
                            </Col>
                        </Row>
                    </Col>
                    {/* <Col lg={6} className={styles.review_box}>
                        <div className={`mx-5 ${styles.redbox}`}>
                            <div className="d-flex justify-content-around my-4">
                                <div>
                                <Image 
                                src={Vector}
                                layout="fixed"
                                />
                                </div>
                                <div className='text-center my-4'>
                                    <p>“ Easy to use and keeps the user Privacy Perfectly. 
                                        This platform really gives me ideas of my wedding.” </p>
                                        <div className='d-flex justify-content-center my-3'>
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        </div>
                                        <h6>Alina Paul</h6>
                                </div>
                            </div>
                        </div>
                        <div className={`mx-5 my-3 ${styles.box}`}>
                            <div className="d-flex justify-content-around my-4">
                                <div>
                                <Image 
                                src={Vector1}
                                layout="fixed"
                                />
                                </div>
                                <div className='text-center my-4'>
                                    <p>“ Easy to use and keeps the user Privacy Perfectly. 
                                        This platform really gives me ideas of my wedding.” </p>
                                        <div className='d-flex justify-content-center my-3'>
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        </div>
                                        <h6>Alina Paul</h6>
                                </div>
                            </div>
                        </div>
                        <div className={`mx-5 my-3 ${styles.box}`}>
                            <div className="d-flex justify-content-around my-4">
                                <div>
                                <Image 
                                src={Vector2}
                                layout="fixed"
                                />
                                </div>
                                <div className='text-center my-4'>
                                    <p>“ Easy to use and keeps the user Privacy Perfectly. 
                                        This platform really gives me ideas of my wedding.” </p>
                                        <div className='d-flex justify-content-center my-3'>
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        </div>
                                        <h6>Alina Paul</h6>
                                </div>
                            </div>
                        </div>
                    </Col> */}
                </Row>
                <Row className="my-2">
                <Col lg={12} className={styles.review_box}>
                
                        <div className={` ${styles.redbox}`}>
                            <div className="d-flex justify-content-around my-4">
                                <div>
                                <Image 
                                src={Vector}
                                layout="fixed"
                                />
                                </div>
                                <div className='text-center my-4'>
                                <h6>Alina Paul</h6>
                                <div className='d-flex  my-3'>
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        </div>
                                <h5 className='sub-heading'>Outstanding Wedding Planners!</h5>
                                    <p>“ Easy to use and keeps the user Privacy Perfectly. 
                                        This platform really gives me ideas of my wedding.” </p>
                                        
                                        
                                </div>
                            </div>
                        </div>
                        
                        <div className={` ${styles.redbox}`}>
                            <div className="d-flex justify-content-around my-4">
                                <div>
                                <Image 
                                src={Vector1}
                                layout="fixed"
                                />
                                </div>
                                <div className='text-center my-4'>
                                <h6>Alina Paul</h6>
                                <div className='d-flex  my-3'>
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        </div>
                                <h5 className='sub-heading'>Outstanding Wedding Planners!</h5>
                                    <p>“ Easy to use and keeps the user Privacy Perfectly. 
                                        This platform really gives me ideas of my wedding.” </p>
                                       
                                        
                                </div>
                            </div>
                        </div>
                        <div className={` ${styles.redbox}`}>
                            <div className="d-flex justify-content-around my-4">
                                <div>
                                <Image 
                                src={Vector2}
                                layout="fixed"
                                />
                                </div>
                                <div className='text-center my-4'>
                                <h6>Alina Paul</h6>
                                <div className='d-flex  my-3'>
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        <AiFillStar
                                            className={styles.star}
                                        />
                                        </div>
                                <h5 className='sub-heading'>Outstanding Wedding Planners!</h5>
                                    <p>“ Easy to use and keeps the user Privacy Perfectly. 
                                        This platform really gives me ideas of my wedding.” </p>
                                       
                                        
                                </div>
                            </div>
                        </div>
                    </Col>
                    </Row>

            </Container>

        </div>
    )
}

export default Reviews