import React, { Component } from "react";
import Slider from "react-slick";
import VendorCard from "./VendorCard";
import styles from "/styles/home/Index.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Vendors = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Container
        className="my-5"
      >
        <Row>
          <Col>

            <div className={`text-center my-5 ${styles.vendors}`}>
              <h5>Easy access of cards, amd essentials on the go</h5>
              <h1>Browse Our Store for <br /> Nikkah and Invitations</h1>
            </div>
            <div>
              <Slider {...settings}>
                <div>
                  <VendorCard
                    imgsrc="/../assests/home_img/card.svg"
                    title="Nikkah Name Style 1"
                    onclick='/nikkah-templates'
                  />
                </div>
                <div>
                  <VendorCard
                    imgsrc="/../assests/home_img/card.svg"
                    title="Nikkah Name Style 2"
                    onclick='/nikkah-templates'
                  />
                </div>
                <div>
                  <VendorCard
                    imgsrc="/../assests/home_img/invitationcard.svg"
                    title="Nikkah Template Style 1"
                    onclick='/nikkah-templates'
                  />
                </div>
                <div>
                  <VendorCard
                    imgsrc="/../assests/home_img/invitationcard.svg"
                    title="Nikkah Template Style 2"
                    onclick='/nikkah-templates'
                  />
                </div>
              </Slider>
            </div>


          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Vendors;