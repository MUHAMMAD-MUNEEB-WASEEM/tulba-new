import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { RiTodoFill } from "react-icons/ri";
import styles from "/styles/modal/modal.module.scss";
import Image from "next/image";
import norton from "../../../public/assests/home_img/norton.png";

// render(<App />);
import React from "react";

const MyVerticallyCenteredModal = (props) => {
  return (
    <div className=" relative">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="pro-modal"
      >
        <Modal.Body>
          <div className="absolute right-7 text-xl hover:text-blue-500 hover:cursor-pointer" onClick={props.onHide}> x </div>
          <span className="d-flex justify-content-start">
            {/* <RiTodoFill className={` ${styles.icon}`} />  */}

            <span className={styles.head}>Your Cart</span>
          </span>
          {/* <p className={styles.subtitle}>Create new task for you task list</p> */}
          <Row>
            <Col sm={12}>
              <Button
                className={styles.btn}
                variant="danger"
                onClick={props.onHide}
              >
                Good to know: we offer free shipping everyday
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="flex justify-center items-center py-40">
                {" "}
                You Have Nothing in your Cart
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="h-[2px] bg-gray-300 mx-2" />
            </Col>
          </Row>
          <Row>
            {" "}
            <Col>
              <div className="flex justify-start my-4">
                <Image
                  src={norton}
                  alt="tulbalogo"
                  loading="lazy"
                  width={120}
                  objectFit="contain"
                />
              </div>
            </Col>
          </Row>

          {/* <Form.Group className="mb-2" controlId="formGroupEmail">
            <Form.Label>Select Avatar</Form.Label>
            <Form.Control type="file" placeholder="Enter avatar" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formGroupEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control type="email" placeholder="ABC Road" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formGroupEmail">
            <Form.Label>What Kind of Venue</Form.Label>
            <Form.Control type="email" placeholder="Enter venue" />
          </Form.Group>  */}
        </Modal.Body>
        {/* <Row>
          <Col md={6}>
            <Button
              className={styles.btn}
              variant="danger"
              onClick={props.onHide}
            >
              Add Task
            </Button>
          </Col>
          <Col md={6}>
            <Button
              className={styles.btn}
              variant="danger"
              onClick={props.onHide}
            >
              Close
            </Button>
          </Col>
        </Row> */}
      </Modal>
    </div>
  );
};

export default MyVerticallyCenteredModal;
