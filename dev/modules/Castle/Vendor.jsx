import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "/styles/castle/castle.module.scss";

const Vendor = () => {
  return (
    <div>
      <Container
      className="my-5"
      >
        <Row>
          <Col className={styles.vendor}>
            <h5>Description for this Vendor</h5>
            <h2>Vendors</h2>
            <p>
              Maxwell's equations—the foundation of classical
              electromagnetism—describe light as a wave that moves with a
              characteristic velocity. The modern view is that light needs no
              medium of transmission, but Maxwell and his contemporaries were
              convinced that light waves were propagated in a medium, analogous
              to sound propagating in air, and ripples propagating on the
              surface of a pond. This hypothetical medium was called the
              luminiferous aether, at rest relative to the "fixed stars" and
              through which the Earth moves. Fresnel's partial ether dragging
              hypothesis ruled out the measurement of first-order (v/c) effects,
              and although observations of second-order effects (v2/c2) were
              possible in principle, Maxwell thought they were too small to be
              detected with then-current technology.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vendor;
