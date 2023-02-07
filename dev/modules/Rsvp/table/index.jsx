import { Container, Row, Col, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { RiTodoFill } from "react-icons/ri";
import styles from "/styles/Rsvp/Rsvp.module.scss";
import Image from "next/image";
import Rectangle2 from "public/assests/home_img/Rectangle 374.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Pagination from 'react-bootstrap/Pagination';
import AddGuestModal from 'components/popup/guest_popup'
import { useState } from "react";


let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function BasicExample() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container fluid className={` my-5 ${styles.rsvp_page}`}>
      <AddGuestModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Row>
        <Col lg={8} className={`p-0 ${styles.rsvp}`}>
          <Row>
            <Col lg={4} className="p-0">
              <span className="d-flex justify-content-start">
                <RiTodoFill className={`mt-4 ${styles.icon}`} />
                <span className={styles.head}>RSVP LIST</span>
              </span>
              <p className="">Your Invitations to the guests details</p>
            </Col>
            <Col lg={5} className="p-0">
              <Button onClick={()=>setModalShow(true)} className={` ${styles.btn}`}>
                + Add New Guest
              </Button>
            </Col>
            <Col lg={3} md={12}
            className="rsvptable">
              <FloatingLabel
                controlId="floatingSelect"
                className="my-4 "
              >
                <Form.Select aria-label="Floating label select example">
                  <option className="hidden">Invited</option>
                  <option className="cursor-pointer" value="1">Yes</option>
                  <option  value="2">No</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Table responsive striped hover
            className="table-responsive mt-4 rsvptable text-center" 
          >
            <thead
            >
              <tr >
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Invited</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Waleed Khan</td>
                <td>0322-8008673</td>
                <td>waleedkhan650@gmail.com</td>
                <td>yes</td>
              </tr>
              <tr>
                <td>Waleed Khan</td>
                <td>0322-8008673</td>
                <td>waleedkhan650@gmail.com</td>
                <td>yes</td>
              </tr>
              <tr>
                <td>Waleed Khan</td>
                <td>0322-8008673</td>
                <td>waleedkhan650@gmail.com</td>
                <td>yes</td>
              </tr>
              <tr>
                <td>Waleed Khan</td>
                <td>0322-8008673</td>
                <td>waleedkhan650@gmail.com</td>
                <td>yes</td>
              </tr>
              <tr>
                <td>Waleed Khan</td>
                <td>0322-8008673</td>
                <td>waleedkhan650@gmail.com</td>
                <td>yes</td>
              </tr>
              <tr>
                <td>Waleed Khan</td>
                <td>0322-8008673</td>
                <td>waleedkhan650@gmail.com</td>
                <td>yes</td>
              </tr>

            </tbody>
          </Table>
        </Col>
        <Col lg={4}>
          <div className={`d-flex justify-content-center align-items-center flex-column text-center ${styles.guest}`}>
            <div>
              <h5>Total Guest</h5>
              <h2>200</h2>
            </div>
            <div>
              <h5>Coming</h5>
              <h2>150</h2>
            </div>
            <div>
              <h5>Not Coming</h5>
              <h2>12</h2>
            </div>
            <div>
              <h5>Pending Invites</h5>
              <h2>10</h2>
            </div>
          </div>
        </Col>
        <Col lg={12} className="">
          <div className="d-flex justify-content-end p-5">
            <Pagination size="md">{items}</Pagination>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BasicExample;
