import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Row,Col} from 'react-bootstrap'
import { RiTodoFill } from "react-icons/ri";
import styles from "/styles/modal/modal.module.scss";

// render(<App />);
import React from 'react'

const MyVerticallyBusinessModal = (props) => {
  return (
    <div>
         <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="pro-modal"
    >
      <Modal.Body>
            
        <span className="d-flex justify-content-start">
                <RiTodoFill className={` ${styles.icon}`} />
                <span className={styles.head}>Add new task</span>
              </span>
              <p className={styles.subtitle}>Create new task for you task list</p>
        <Row>
            <Col md={6}>
      <Form.Group className="mb-2" controlId="formGroupEmail">
        <Form.Label>Business Name</Form.Label>
        <Form.Control type="text" placeholder="John Doe" />
      </Form.Group>
      </Col>
      <Col md={6}>
      <Form.Group className="mb-2" controlId="formGroupEmail">
        <Form.Label>Default avatar by category</Form.Label>
        <Form.Control type="email" placeholder="Alexa" />
      </Form.Group>
      </Col>
      </Row>

      <Row>
            <Col md={6}>
      <Form.Group className="mb-2" controlId="formGroupEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="John Doe" />
      </Form.Group>
      </Col>
      <Col md={6}>
      <Form.Group className="mb-2" controlId="formGroupEmail">
        <Form.Label>Contact Details</Form.Label>
        <Form.Control type="number" placeholder="Alexa" />
      </Form.Group>
      </Col>
      </Row>

      <Form.Group className="mb-2" controlId="formGroupEmail">
        <Form.Label>Upload Pic</Form.Label>
        <Form.Control type="file" placeholder="Enter avatar" />
      </Form.Group>
      
      <Form.Group className="mb-2" controlId="formGroupEmail">
        <Form.Label>Add Description and services offered</Form.Label>
        <Form.Control type="number" placeholder="Alexa" />
      </Form.Group>
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
        <Col md={6}>
        <Button className={styles.btn} variant="danger" onClick={props.onHide}>Add Task</Button>
        </Col>
        <Col md={6}>
        <Button className={styles.btn} variant="danger" onClick={props.onHide}>Close</Button>
        </Col>
        </Row>
    </Modal>
    </div>
  )
}

export default MyVerticallyBusinessModal