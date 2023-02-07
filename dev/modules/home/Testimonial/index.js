import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import Slider from "react-slick";
import Content from "./Content";
import styles from "/styles/home/Index.module.scss";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={`py-5 my-5 ${styles.testimonial}`}>
        <Container>
          <Row>
            <Col>
              <div className={`text-center ${styles.template}`}>
                <h5>Commnets about our clients / lets see them</h5>
                <h1>What our customer says</h1>
              </div>
              <div>
                <Slider {...settings}>
                  <div>
                    <Content
                      comment="“ Easy to use and keeps the user Privacy Perfectly. This platform really gives me ideas of my wedding. “"
                      // imgsrc="/../assests/home_img/Vector.svg"
                      client="/../assests/home_img/Male 1.svg"
                      clientName="Shahrukh Ali"
                    /> 
                  </div>
                  <div>
                    <Content
                      comment="“ Easy to use and keeps the user Privacy Perfectly. This platform really gives me ideas of my wedding. “"
                      // imgsrc="/../assests/home_img/Vector.svg"
                      client="/../assests/home_img/Female 1.svg"
                      clientName="Alina Paul"

                    />
                  </div>
                  <div>
                    <Content
                      comment="“ Easy to use and keeps the user Privacy Perfectly. This platform really gives me ideas of my wedding. “"
                      // imgsrc="/../assests/home_img/Vector.svg"
                      client="/../assests/home_img/Male 1.svg"
                      clientName="Ali Al Mairaj"
                    />
                  </div>
                  <div>
                    <Content
                      comment="“ Easy to use and keeps the user Privacy Perfectly. This platform really gives me ideas of my wedding. “"
                      // imgsrc="/../assests/home_img/Vector.svg"
                      client="/../assests/home_img/Female 1.svg"
                      clientName="Shahrukh Ali"

                    />
                  </div>
                  <div>
                    <Content
                      comment="“ Easy to use and keeps the user Privacy Perfectly. This platform really gives me ideas of my wedding. “"
                      // imgsrc="/../assests/home_img/Vector.svg"
                      client="/../assests/home_img/Male 1.svg"
                      clientName="Alina Paul"

                    />
                  </div>
                  <div>
                    <Content
                      comment="“ Easy to use and keeps the user Privacy Perfectly. This platform really gives me ideas of my wedding. “"
                      // imgsrc="/../assests/home_img/Vector.svg"
                      client="/../assests/home_img/Female 1.svg"
                                            clientName="Shahrukh Ali"

                    />
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Testimonial;
