
import {Modal, Form, Button, Row, Col } from "react-bootstrap";
import { RiTodoFill } from "react-icons/ri";
import styles from "/styles/modal/guestModal.module.scss";

// render(<App />);
import React from "react";

const AddGuestModal = (props) => {
    return (
        <div className="absolute left-20  ">
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                className="pro-modal "
            >
                <Modal.Body>

                    <span className="d-flex justify-content-between  items-center">
                        <div className="d-flex justify-content-start  items-center">
                        <RiTodoFill className={` ${styles.icon} `} />
                        <span className={`${styles.head} `}>Add New Guest</span>
                        </div>
                        <div onClick={props.onHide} className={styles.closeButton}>X</div>
                    </span>
                    <p className={styles.subtitle}>Create new task for you task list</p>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-2" controlId="formGroupEmail">
                                <Form.Label>Groom Name</Form.Label>
                                <Form.Control type="email" placeholder="John Doe" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-2" controlId="formGroupEmail">
                                <Form.Label>Bride Name</Form.Label>
                                <Form.Control type="email" placeholder="Alexa" />
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Label>Select Avatar</Form.Label>
                        <Form.Control type="file" placeholder="Enter avatar" />
                    </Form.Group> */}
                    <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="email" placeholder="ABC Road" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Label>What Kind of Venue</Form.Label>
                        <Form.Control type="email" placeholder="Enter venue" />
                    </Form.Group>

                </Modal.Body>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <Button className={styles.btn} variant="danger" onClick={props.onHide}>Add Guest</Button>
                    </Col>
                    {/* <Col md={6}>
                        <Button className={styles.btn} variant="danger" onClick={props.onHide}>Close</Button>
                    </Col> */}
                </Row>
            </Modal>
        </div>
    )
};

export default AddGuestModal;
