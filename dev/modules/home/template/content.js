/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "/styles/home/Index.module.scss";
import Image from "next/image";
import Link from "next/link";

const Content = (props) => {
    return (
        <>
            <div className="my-5">
                {" "}
                <Container>
                    <Row className="d-flex justify-content-center align-item-center">
                        <Col md={5} sm={12} xs={12}>
                            {/* <div className={styles.background}> */}
                            <Image
                                src={props.imgsrc}
                                layout="responsive"
                                height={0}
                                width={0}
                                alt="template"
                            />
                            {/* </div> */}
                        </Col>
                        <Col md={7} sm={12} xs={12} className="mt-5">
                            <h5 className={styles.head}> {props.head}</h5>
                            <h2>{props.ques}</h2>
                            <ul>
                                <li>{props.li_one}</li>
                                <li>{props.li_two}</li>
                                <span className="d-flex justify-content-start">
                                    <li>{props.li_three}
                                        <Link href="/event">
                                            <button  variant="danger"
                                                className={styles.libtn}> see more
                                            </button>

                                        </Link>
                                    </li>
                                </span>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

const Content2 = (props) => {
    return (
        <>
            {" "}
            <div className="my-5">
                <Container>
                    <Row>
                        <Col md={6} sm={12} xs={12} className={`mt-5 ${styles.ImgOrder1}`}>
                            <h5 className={styles.head_blue}>{props.head}</h5>
                            <h2>{props.ques}</h2>
                            <ul>
                                <li>{props.li_one}</li>
                                <li>{props.li_two}</li>
                                <span className="d-flex justify-content-start">
                                    <li>{props.li_three}
                                        <Link href="/castle">
                                            <Button variant="danger"
                                                className={styles.libtn}> see more
                                            </Button>

                                        </Link>
                                    </li>
                                </span>
                            </ul>
                        </Col>

                        <Col md={6} sm={12} xs={12}className={`mt-5 ${styles.ImgOrder2}`}>
                            {/* <div className={styles.background_blue}> */}
                            <Image
                                src={props.imgsrc}
                                width={"350px"}
                                height={"350px"}
                                layout="responsive"
                                alt="template"
                            />
                            {/* </div> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export { Content, Content2 };
