import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import './style.css';

const About = () => {
  return (
    <div className='about-section'>
      <Container>
        <Row className="mt-5">
          <Col md={4} lg={3}>
            <div className="profile-img"></div> {/*写真を表示するdiv*/}
          </Col>
          <Col md={6} lg={7}>
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

        <Row className="mt-5">
          <Col lg={10}>
            <h2>Education</h2>
            <ul>
              <li>2016.3 - 2019.4 : 東京工業大学附属科学技術高等学校 情報システム分野</li>
              <li>2019.4 - 2023.3 : 東京工業大学 情報理工学院 情報工学系 学士</li>
              <li>2023.4 - present: 東京工業大学 情報理工学院 情報工学系 知能情報コース 修士</li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={10}>
            <h2>Affiliations</h2>
            <ul>
              <li>東京工業大学 大上研究室</li>
              <li>ロボット技術研究会 Aqua研</li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-5 mb-5">
          <Col lg={10}>
            <h2>Contact Me</h2>
            <ul>
              <li>Email : uchikawa.k.ac[at]m.titech.ac.jp</li>
              <li>Twitter : @uchinarupower</li>
              <li>GitHub : @uchinarupower</li>
              <li>Zenn : @uchinarupower</li>
            </ul>
          </Col>
        </Row>


      </Container>
    </div>
  );
};

export default About;
