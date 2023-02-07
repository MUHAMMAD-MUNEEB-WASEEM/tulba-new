import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Content, Content2 } from "./content";
import styles from "/styles/home/Index.module.scss";

const Template = () => {
  return (
    <>
      <div className={` my-5 ${styles.temp}`}>
        <Container className="my-5">
          <Row>
            <Col>
              <Content
                imgsrc="/../assests/home_img/1-02.svg"
                head="Advanced Website Templates"
                ques="Choose the template website of event."
                li_one="We got the best event planners and most economical setup for event."
                li_two="Choose from hundreds of beautiful designs"
                li_three="Designed to match your wedding website "
              />
              <Content2
                imgsrc="/../assests/home_img/1-04.svg"
                head="Advanced Website Templates"
                ques="Browse Invitation Cards and Nikkah templates"
                li_one="We got the best event planners and most economical setup for event."
                li_two="Choose from hundreds of beautiful designs"
                li_three="Designed to match your wedding website "
              />
              <Content
                imgsrc="/../assests/home_img/1-01.svg"
                head="Advanced Website Templates"
                ques="Manage all your things with Checklist manager."
                li_one="We got the best event planners and most economical setup for event."
                li_two="Choose from hundreds of beautiful designs"
                li_three="Designed to match your wedding website " 
              />
              <Content2
                imgsrc="/../assests/home_img/1-03.svg"
                head="Advanced Website Templates"
                ques="Invite the RSVP and your guests with your cards."
                li_one="We got the best event planners and most economical setup for event."
                li_two="Choose from hundreds of beautiful designs"
                li_three="Designed to match your wedding website "
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Template;
