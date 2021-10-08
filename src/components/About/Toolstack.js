import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudio,
  SiVisualstudiocode,
  SiMicrosoftsqlserver,
  SiPostman,
  SiSwagger,
  SiXcode
} from "react-icons/si";
import { DiEclipse } from "react-icons/di";
import { BiNotepad } from "react-icons/bi";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXcode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiNotepad />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillAndroid />
      </Col>
    </Row>
  );
}

export default Toolstack;
