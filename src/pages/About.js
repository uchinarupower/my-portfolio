import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'; // CSSファイルのインポート

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={4}>
            <div className="profile-img"></div> {/*写真を表示するdiv*/}
          </Col>
          <Col md={8}>
            <div className="profile-content">
              <h2>UCHIKAWA Keisuke a.k.a uchinarupower</h2>
              <h4>University: Tokyo Institute of Technology,</h4>
              <h4>degree: M1, </h4>
              <h4>Affiliation: Ohue Lab, SSR</h4>
              <p>
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
