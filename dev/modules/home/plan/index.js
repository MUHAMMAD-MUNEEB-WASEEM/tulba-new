import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {MyCard,MyCardBlue,MyCardYellow, MyCardOne} from "./MyCard";
import styles from "/styles/home/Index.module.scss";
import imageone from "public/assests/home_img/Download.svg"
import arabian2 from "public/assests/home_img/arabian.jpg"
import invitation from 'public/assests/home_img/invitation.png'
import nikkah from 'public/assests/home_img/nikkah.png'
import checklist from 'public/assests/home_img/Checklist.jpg'


const Plan = () => {
  return (
    <>
      <Container  className="my-5">
        <Row className="my-5">
          <Col md={12}>
            <div className={`text-center ${styles.plan}`}>
              <h5>WE got the best tools for your event, so hop on</h5>
              <h1>Tools that make Wedding Plan simple</h1>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
            <MyCard
              // imgsrc={imageone}
              path='/Vendor'
              imgsrc={arabian2}
              
              head="Vendor Search"
              para="Browse through venues, catering, decor & more 
                    with our most economical platform for make your dream
                    wedding comes true."
              btn="Search Vendor"
            />
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
          <MyCardYellow
              imgsrc="/../assests/home_img/temp1.svg"
              head="Event Website"
              para="Browse through venues, catering, decor & more with our most economical platform for make your dream wedding comes true."
              btn="Create Free Site"
              path='/event'
            />
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
          <MyCardBlue
              imgsrc={invitation}
              head="Shop Invitation Card"
              para="Browse through venues, catering, decor & more with our most economical platform for make your dream wedding comes true."
              btn="Browse Invitation"
              path='/store'
            />
          </Col>
        <Col lg={4} md={6} sm={6} xs={6}>
          <MyCardBlue
              imgsrc={nikkah}
              head="Nikkah Template"
              para="Browse through venues, catering, decor & more 
                    with our most economical platform for make your dream
                    wedding comes true."
              btn="Browse Card"
              path='/template'
            />
          </Col>
          <Col lg={4} md={6} sm={6} xs={6}>
          <MyCardYellow
              imgsrc={checklist}
              head="Checklist Creation"
              para="Browse through venues, catering, decor & more 
                    with our most economical platform for make your dream
                    wedding comes true."
              btn="Start Planning"
              path='/template'
            />
          </Col>
          <Col lg={4} md={6}  sm={6} xs={6}>
            <MyCardOne
              imgsrc="/../assests/home_img/Download.svg"
              head="Guest List/RSVP"
              para="Browse through venues, catering, decor & more 
                    with our most economical platform for make your dream
                    wedding comes true."
              btn="Rsvp Invites"
              path='/Rsvp'

            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Plan;
