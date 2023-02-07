/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import style from "/styles/Rsvp/Rsvp.module.scss";
import Image from "next/image";
import Img from "public/assests/asthetical/savedate.svg";
import styles from "/styles/asthetical/aesthetical.module.scss";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import faq from "public/assests/asthetical/faq.svg";

const Save_date = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} className={`mx-5 ${style.banner}`}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#" className={style.brdcrumb}>Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#" className={style.brdcrumb}>Template</Breadcrumb.Item>
                            <Breadcrumb.Item active className={style.actbrdcrumb}>Asthetical</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col lg={6}>
                        <Image
                            src={Img}
                        />
                    </Col>
                    <Col lg={6} className={`mt-4 ${styles.save_date}`}>
                        <div className="d-flex justify-content-start">
                            <h4>Review : </h4>
                            <h2> <i className="mx-2"> Save the Date</i> </h2>
                        </div>
                        <p className={styles.head}>Double Check all your text and images before we print it for you.</p>
                        <h3 className="mt-3">Paper Save the date - terian Portrait</h3>
                        <div className="d-flex justify-content-start mt-2">
                            <span className="">Colour :</span>
                            <h5 className="mx-2">White</h5>
                        </div>
                        <div className="d-flex justify-content-start">
                            <span className="">Paper Type :</span>
                            <h5 className="mx-2">Smooth</h5>
                        </div>
                        <div className='save'>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                            >
                                <Form.Select
                                    aria-label="Floating label select example"
                                >

                                    <option>1(proof)</option>
                                    <option value="1(proof)">1(proof)</option>
                                    <option value="1(proof)">1(proof)</option>
                                    <option value="1(proof)">1(proof)</option>
                                </Form.Select>
                            </FloatingLabel>
                        </div>
                        <p className={styles.price}>
                            20 $
                        </p>
                        <a href="#">Edit -&gt; </a>
                        <hr />
                        {/* <div>
                            <h3 className="mt-3">Paper Save the date - terian Portrait</h3>
                            <div className="d-flex justify-content-start mt-2">
                                <span className="">Colour :</span>
                                <h5 className="mx-2">White</h5>
                            </div>
                            <div className="d-flex justify-content-start">
                                <span className="">Paper Type :</span>
                                <h5 className="mx-2">Smooth</h5>
                            </div>
                            <div className="d-flex justify-content-start">
                                <span className="">Quantity:</span>
                                <h5 className="mx-2">1</h5>
                            </div>
                            <p className={styles.price}>
                                Free
                            </p>
                            <a href="#">Edit -> </a>
                        </div> */}

                        <div className={styles.box}>
                            <h3>
                                WE have got your back
                            </h3>
                            <p>
                                your purchase comes with the free changes in the date if you need
                                them in any circumstances
                            </p>
                            <p className='mt-4'>
                                Just create a change the create draft and we will send you a
                                unique promo code in next 36 hours
                            </p>
                        </div>

                        <div className={styles.total_box}>
                            <h3>Subtotal : 20$</h3>
                            <hr />
                            <div className="d-flex">
                                <div className='my-1 mx-2'>
                                    <input type="checkbox" name="" id="" />
                                </div>
                                <div>
                                    <span>All my text, date and imnformation and correct , and i am ready to print my work.</span>
                                </div>
                            </div>

                            <Button className={styles.check_btn}>Proceed to Checkout</Button>
                            <Button className={styles.draft_btn}>Save as Draft</Button>{' '}


                        </div>

                        <div className="d-flex justify-content-start">
                            <div>
                                <Image
                                    src={faq}
                                />
                            </div>
                            <div className={`mx-3 ${styles.mail}`}>
                                <h4>We are here for you.</h4>
                                <p>Send us your email at :
                                    <a href="mailto: TulbaWeds@gmail.com">
                                    TulbaWeds@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Save_date