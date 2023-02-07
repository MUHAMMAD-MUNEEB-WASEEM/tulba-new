/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "/styles/castle/castle.module.scss";
import Image from "next/image";
import Vector from "public/assests/castle/icon1.svg";
import Vector2 from "public/assests/castle/icon2.svg";
import Vector3 from "public/assests/castle/icon3.png";
import Vector4 from "public/assests/castle/icon4.svg";
import Vector5 from "public/assests/castle/icon5.svg";
import Vector6 from "public/assests/castle/icon6.svg";

const Property = () => {
  return (
    <div>
      <Container fluid className={styles.Property}>
        <Row>
          <Col>
            <div className="p-5">
              <span>See our best services for this venue</span>
              <h2>our Property Amenities</h2>
              <Row>
                <Col lg={4} className="my-5">
                  <div>
                    <div className="my-3">
                    <Image
                      src={Vector}
                      layout="fixed"
                      height={"50px"}
                      width={"50px"}
                      className={styles.img}
                    />
                    </div>
                    <h5 className="my-2">Security Camers</h5>
                    <p>
                      Maxwell's equations—the foundation of classical
                      electromagnetism—describe light as a wave that
                    </p>
                  </div>
                </Col>
                
                <Col lg={4} className="my-5">
                  <div>
                    <div className="my-3">
                    <Image
                      src={Vector2}
                      layout="fixed"
                      height={"50px"}
                      width={"50px"}
                      className={styles.img}
                    />
                    </div>
                    <h5 className="my-2">Swimming Pool</h5>
                    <p>
                      Maxwell's equations—the foundation of classical
                      electromagnetism—describe light as a wave that
                    </p>
                  </div>
                </Col>

                
                <Col lg={4} className="my-5">
                  <div>
                    <div className="my-3">
                    <Image
                      src={Vector3}
                      layout="fixed"
                      height={"50px"}
                      width={"50px"}
                      className={styles.img}
                    />
                    </div>
                    <h5 className="my-2">Parking</h5>
                    <p>
                      Maxwell's equations—the foundation of classical
                      electromagnetism—describe light as a wave that
                    </p>
                  </div>
                </Col>

              </Row>

              <Row>
                <Col lg={4} className="my-5">
                  <div>
                    <div className="my-3">
                    <Image
                      src={Vector4}
                      layout="fixed"
                      height={"50px"}
                      width={"50px"}
                      className={styles.img}
                    />
                    </div>
                    <h5 className="my-2">Internet Facility</h5>
                    <p>
                      Maxwell's equations—the foundation of classical
                      electromagnetism—describe light as a wave that
                    </p>
                  </div>
                </Col>
                
                <Col lg={4} className="my-5">
                  <div>
                    <div className="my-3">
                    <Image
                      src={Vector5}
                      layout="fixed"
                      height={"50px"}
                      width={"50px"}
                      className={styles.img}
                    />
                    </div>
                    <h5 className="my-2">Food Service</h5>
                    <p>
                      Maxwell's equations—the foundation of classical
                      electromagnetism—describe light as a wave that
                    </p>
                  </div>
                </Col>

                
                <Col lg={4} className="my-5">
                  <div>
                    <div className="my-3">
                    <Image
                      src={Vector6}
                      layout="fixed"
                      height={"50px"}
                      width={"50px"}
                      className={styles.img}
                    />
                    </div>
                    <h5 className="my-2">Catering</h5>
                    <p>
                      Maxwell's equations—the foundation of classical
                      electromagnetism—describe light as a wave that
                    </p>
                  </div>
                </Col>
                
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Property;
