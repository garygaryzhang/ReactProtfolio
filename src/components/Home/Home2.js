import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactRoundedImage from "react-rounded-image";
import myImg from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About Me
            </h1>
            <p className="home-about-body">
              Application Developer, Software Engineer or Code Farmer you name it.
              <br />
              <br />Launguages I'm using
              <i>
                <b className="blue"> C#, VB, MSSQL, C++, Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building &nbsp;
              <i>
                <b className="blue">Mobile, Desktop, Cloud and PWA Technologies and Products </b>
              </i>
              <br />
              <br />
              I also apply my passion for developing products
              with <b className="blue">.NET & .NET Core</b> and
              <i>
                <b className="blue">
                  {" "}
                  everything around Xamarin
                </b>
              </i>
              <br />
              <br />
              Leaving comfort zones and pushing yourself, that's the only way.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <ReactRoundedImage image={myImg} imageWidth="320" imageHeight="320"/>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to connect with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/garygaryzhang"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/CityBoyGary"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gary-zhang-a66a50a9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
