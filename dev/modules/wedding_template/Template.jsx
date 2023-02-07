import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "/styles/wedTemp/template.module.scss";
import Temp from "public/assests/weddingtemp/temp1.svg";
import Temp2 from "public/assests/weddingtemp/temp2.svg";
import Temp3 from "public/assests/weddingtemp/temp3.svg";
import Temp4 from "public/assests/weddingtemp/temp4.svg";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { useState } from 'react';
import Link from 'next/link';

const Template = () => {

    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <div>
            <Container >
                <Row>
                    <Link href="/template/design">
                        <Col  lg={3} md={6} className={styles.template}>
                    
                                <Image
                                    src={Temp}
                                    layout="responsive"
                                    alt="template"
                                />
                                <div className="d-flex justify-content-between">                                    <p>
                                    The Asthetical
                                </p>
                                    <AiFillHeart
                                        className={styles.heartIcon} />
                                </div>
                                <span>
                                    Starting from $29
                                </span>

                                <div className="d-flex justify-content-start  my-1">
                                    <div className={`mx-1 ${styles.circle_blue}`}></div>
                                    <div className={`mx-1 ${styles.circle_green}`}></div>
                                    <div className={`mx-1 ${styles.circle_pink}`}></div>

                            </div>
                            

                        </Col>
                    </Link>
                    <Col lg={3}md={6} className={styles.template}>
                        <Image
                            src={Temp2}
                            layout="responsive"
                            alt="template"
                        />
                        <div className="d-flex justify-content-between">                                    <p>
                            The Asthetical
                        </p>
                            <AiFillHeart
                                className={styles.heartIcon} />
                        </div>
                        <span>
                            Starting from $29
                        </span>

                        <div className="d-flex justify-content-start  my-1">
                            <div className={`mx-1 ${styles.circle_blue}`}></div>
                            <div className={`mx-1 ${styles.circle_green}`}></div>
                            <div className={`mx-1 ${styles.circle_pink}`}></div>

                        </div>

                    </Col>
                    <Col lg={3} md={6} className={styles.template}>
                        <Image
                            src={Temp3}
                            layout="responsive"
                            alt="template"
                        />
                        <div className="d-flex justify-content-between">                                    <p>
                            The Asthetical
                        </p>
                            <AiFillHeart
                                className={styles.heartIcon} />
                        </div>
                        <span>
                            Starting from $29
                        </span>

                        <div className="d-flex justify-content-start  my-1">
                            <div className={`mx-1 ${styles.circle_blue}`}></div>
                            <div className={`mx-1 ${styles.circle_green}`}></div>
                            <div className={`mx-1 ${styles.circle_pink}`}></div>

                        </div>

                    </Col>
                    <Col lg={3} md={6} className={styles.template}>
                        <Image
                            src={Temp4}
                            layout="responsive"
                            alt="template"
                        />
                        <div className="d-flex justify-content-between">                                    <p>
                            The Asthetical
                        </p>
                            <AiFillHeart
                                className={styles.heartIcon} />
                        </div>
                        <span>
                            Starting from $29
                        </span>

                        <div className="d-flex justify-content-start  my-1">
                            <div className={`mx-1 ${styles.circle_blue}`}></div>
                            <div className={`mx-1 ${styles.circle_green}`}></div>
                            <div className={`mx-1 ${styles.circle_pink}`}></div>

                        </div>

                    </Col>
                </Row>
                <Row className="my-5">
                    <Col lg={3} md={6} className={styles.template}>
                        <Image
                            src={Temp}
                            layout="responsive"
                            alt="template"
                        />
                        <div className="d-flex justify-content-between">                                    <p>
                            The Asthetical
                        </p>
                            <AiFillHeart
                                className={styles.heartIcon} />
                        </div>
                        <span>
                            Starting from $29
                        </span>

                        <div className="d-flex justify-content-start  my-1">
                            <div className={`mx-1 ${styles.circle_blue}`}></div>
                            <div className={`mx-1 ${styles.circle_green}`}></div>
                            <div className={`mx-1 ${styles.circle_pink}`}></div>

                        </div>

                    </Col>
                    <Col lg={3} md={6} className={styles.template}>
                        <Image
                            src={Temp2}
                            layout="responsive"
                            alt="template"
                        />
                        <div className="d-flex justify-content-between">                                    <p>
                            The Asthetical
                        </p>
                            <AiFillHeart
                                className={styles.heartIcon} />
                        </div>
                        <span>
                            Starting from $29
                        </span>

                        <div className="d-flex justify-content-start  my-1">
                            <div className={`mx-1 ${styles.circle_blue}`}></div>
                            <div className={`mx-1 ${styles.circle_green}`}></div>
                            <div className={`mx-1 ${styles.circle_pink}`}></div>

                        </div>

                    </Col>
                    <Col lg={3} md={6} className={styles.template}>
                        <Image
                            src={Temp3}
                            layout="responsive"
                            alt="template"
                        />
                        <div className="d-flex justify-content-between">                                    <p>
                            The Asthetical
                        </p>
                            <AiFillHeart
                                className={styles.heartIcon} />
                        </div>
                        <span>
                            Starting from $29
                        </span>

                        <div className="d-flex justify-content-start  my-1">
                            <div className={`mx-1 ${styles.circle_blue}`}></div>
                            <div className={`mx-1 ${styles.circle_green}`}></div>
                            <div className={`mx-1 ${styles.circle_pink}`}></div>

                        </div>

                    </Col>
                    <Col lg={3} md={6} className={styles.template}>
                        <Image
                            src={Temp4}
                            layout="responsive"
                            alt="template"
                        />
                        <div className="d-flex justify-content-between">                                    <p>
                            The Asthetical
                        </p>
                            <AiFillHeart
                                className={styles.heartIcon} />
                        </div>
                        <span>
                            Starting from $29
                        </span>

                        <div className="d-flex justify-content-start  my-1">
                            <div className={`mx-1 ${styles.circle_blue}`}></div>
                            <div className={`mx-1 ${styles.circle_green}`}></div>
                            <div className={`mx-1 ${styles.circle_pink}`}></div>

                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Template