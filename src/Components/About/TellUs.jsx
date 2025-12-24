import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { motion } from 'framer-motion';
import { Zoom } from "react-awesome-reveal";
export const TellUs = () => {
  console.log("Testing commit");

  return (
    <div className="TellUs">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="rightText">
              <h4>
                Please tell us about your idea and how you want it to bePlease
                tell us about your idea and how you want it to be
              </h4>
              <p>
                If you need more HTML templates, you can try visiting TooCSS
                blog and Tooplate websites. You can get many good templates on
                those websites.
              </p>
              <p>
                Nulla non placerat neque, a gravida elit. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Morbi sed dolor condimentum tellus commodo volutpat non
                malesuada turpis.
              </p>
              <motion.button
                whileTap={{ scale: 0.85 }}
                className="motion-button"
              >
                <Button variant="success" size="lg" className="btBg">
                  Discover More
                </Button>
              </motion.button>
            </div>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={6}>
                <Zoom>
                  <div className="item">
                    <span>01</span>
                    <h4>First Step</h4>
                    <p>
                      Pellentesque ipsum elit, congue a sapien laoreet,
                      pellentesque ultricies risus.
                    </p>
                  </div>
                </Zoom>
              </Col>
              <Col lg={6}>
                <Zoom>
                  <div className="item">
                    <span>02</span>
                    <h4>Second Step</h4>
                    <p>
                      Pellentesque ipsum elit, congue a sapien laoreet,
                      pellentesque ultricies risus.
                    </p>
                  </div>
                </Zoom>
              </Col>

              <Col lg={6}>
                <Zoom>
                  <div className="item">
                    <span>03</span>
                    <h4>Second Step</h4>
                    <p>
                      Pellentesque ipsum elit, congue a sapien laoreet,
                      pellentesque ultricies risus.
                    </p>
                  </div>
                </Zoom>
              </Col>

              <Col lg={6}>
                <Zoom>
                  <div className="item">
                    <span>04</span>
                    <h4>Second Step</h4>
                    <p>
                      Pellentesque ipsum elit, congue a sapien laoreet,
                      pellentesque ultricies risus.
                    </p>
                  </div>
                </Zoom>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TellUs;
