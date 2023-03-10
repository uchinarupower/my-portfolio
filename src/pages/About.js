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
            <Row>
              <Col md={12} lg={"auto"}>
                <div className="profile-name">
                  <h2>UCHIKAWA Keisuke</h2>
                </div>
              </Col>
              <Col md={12} lg={"auto"}>
                <div className="profile-nameaka">
                  <h2>a.k.a uchinarupower</h2>
                </div>
              </Col>
            </Row>

            <div className="profile-content">
              <h4>M1 </h4>
              <h4>Tokyo Institute of Technology</h4>
              <h4>Ohue Lab</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
