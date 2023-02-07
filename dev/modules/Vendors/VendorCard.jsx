import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GiElvenCastle, GiCastle, GiNestedHearts, GiLargeDress } from "react-icons/gi";
import Cardcontent from "./Cardcontent";
import styles from "/styles/vendors/vendor.module.scss";
import Pagination from 'react-bootstrap/Pagination';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import vendor from "styles/home/Index.module.scss";
import SideBar from "./SideBar";
// import { Stepper, Step } from 'react-form-stepper';


let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}

const VendorCard = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={3} className={` ${styles.vendors}`}>
                        {/* <nav className="navbar-light bg-light">
                            <ul className="navbar-nav flex-column mr-auto">
                                <h1 className="px-4 my-4">Categories</h1>

                                <li className={`nav-item ${styles.actvelink}`}>
                                    <a
                                        className={"nav-link d-flex justify-content-start"}
                                        href="#"
                                    >
                                        <GiElvenCastle
                                            className={styles.icon}
                                        />
                                        <span>
                                            Wedding Planner
                                        </span>
                                    </a>
                                </li>
                                <li className={"nav-item "}>
                                    <a
                                        className={"nav-link d-flex justify-content-start"}
                                        href="#"
                                    >
                                        <GiCastle
                                            className={styles.icon}
                                        />
                                        <span>
                                            Catering ( 11 )
                                        </span>
                                    </a>
                                </li>
                                <li className={"nav-item "}>
                                    <a
                                        className={"nav-link d-flex justify-content-start"}
                                        href="#"
                                    >
                                        <GiNestedHearts
                                            className={styles.icon}
                                        />
                                        <span>
                                            Decoration ( 8 )
                                        </span>
                                    </a>
                                </li>
                                <li className={"nav-item "}>
                                    <a
                                        className={"nav-link d-flex justify-content-start"}
                                        href="#"
                                    >
                                        <GiLargeDress
                                            className={styles.icon}
                                        />
                                        <span>
                                            Dresses ( 55 )
                                        </span>
                                    </a>
                                </li>

                                <li className={"nav-item active "}>
                                    <a
                                        className={"nav-link d-flex justify-content-start"}
                                        href="#"
                                    >
                                        <GiElvenCastle
                                            className={styles.icon}
                                        />
                                        <span>
                                            Venue ( 20 )
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <FloatingLabel
                                controlId="floatingSelectGrid"
                                label=" Location"
                            >
                                <Form.Select
                                    aria-label="Floating label select example "
                                    className={styles.location}
                                >

                                    <option>In (E.g. Karachi)</option>
                                    <option className="opt" value="Islamabad">Islamabad</option>
                                    <option className={styles.opt} value="Karachi">Karachi</option>
                                    <option className={styles.opt} value="Lahore">Lahore</option>
                                </Form.Select>
                            </FloatingLabel>
                        </nav> */}
                        <SideBar />
                    </Col>
                    <Col lg={9} className={styles.cardss}>
                        <Row className="g-2  mx-3">

                        </Row>
                        <Row>
                            <Col>
                                <div className={` d-none justify-content-start ${vendor.tools}`}>
                                    <div className="mx-4">
                                        <a href="#">Best Matches</a>
                                    </div>
                                    <div className="mx-4">
                                        <a href="#">Discounts</a>
                                    </div>
                                    <div className="mx-4">
                                        <a href="#">popular
                                        </a>
                                    </div>
                                    <div className="mx-4">
                                        <a href="#">My Saved
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} md={6} className="my-5 p-0">

                                <div>
                                    <Cardcontent
                                        imgsrc="/../assests/vendors/card1.svg"
                                        btn="Indoor and OutDoor"
                                        icon="/../assests/home_img/Vector.svg"
                                        price="300 $/"
                                    />
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="my-5 p-0">
                                <div>
                                    <Cardcontent
                                        imgsrc="/../assests/vendors/card2.svg"
                                        btn="Indoor and OutDoor"
                                        icon="/../assests/home_img/Vector.svg"
                                        price="300 $/"
                                    />
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="my-5 p-0">
                                <div>
                                    <Cardcontent
                                        imgsrc="/../assests/vendors/card3.svg"
                                        btn="Indoor and OutDoor"
                                        icon="/../assests/home_img/Vector.svg"
                                        price="300 $/"
                                    />
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="my-5 p-0">

                                <div>
                                    <Cardcontent
                                        imgsrc="/../assests/vendors/card1.svg"
                                        btn="Indoor and OutDoor"
                                        icon="/../assests/home_img/Vector.svg"
                                        price="300 $/"
                                    />
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="my-5 p-0">
                                <div>
                                    <Cardcontent
                                        imgsrc="/../assests/vendors/card2.svg"
                                        btn="Indoor and OutDoor"
                                        icon="/../assests/home_img/Vector.svg"
                                        price="300 $/"
                                    />
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="my-5 p-0">
                                <div>
                                    <Cardcontent
                                        imgsrc="/../assests/vendors/card3.svg"
                                        btn="Indoor and OutDoor"
                                        icon="/../assests/home_img/Vector.svg"
                                        price="300 $/"
                                    />
                                </div>
                            </Col>

                            <Col lg={4} md={6} className="my-5 p-0">

                                <div>
                                    <Cardcontent
                                        imgsrc="/../assests/vendors/card1.svg"
                                        btn="Indoor and OutDoor"
                                        icon="/../assests/home_img/Vector.svg"
                                        price="300 $/"
                                    />
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="my-5 p-0">
                                <div>
                                    <Cardcontent
                                        imgsrc="/../assests/vendors/card2.svg"
                                        btn="Indoor and OutDoor"
                                        icon="/../assests/home_img/Vector.svg"
                                        price="300 $/"
                                    />
                                </div>
                            </Col>
                            <Col lg={4} md={6} className="my-5 p-0">
                                <div>
                                    <Cardcontent
                                        imgsrc="/../assests/vendors/card3.svg"
                                        btn="Indoor and OutDoor"
                                        icon="/../assests/home_img/Vector.svg"
                                        price="300 $/"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-end">
                            <Pagination size="md">{items}</Pagination>
                        </div>
                    </Col>


                </Row>
            </Container>
        </>
    );
};

export default VendorCard;
