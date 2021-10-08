import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import studentManagement from "../../Assets/Projects/StudentManagement.gif";
import xamarin from "../../Assets/Projects/xamarin.gif";
import android from "../../Assets/Projects/android.gif";
import chatify from "../../Assets/Projects/Angular.gif";
import datamining from "../../Assets/Projects/datamining.gif";
import turing from "../../Assets/Projects/turing.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xamarin}
              isBlog={false}
              title="Xamarin Application"
              description="A Xamarin Application I did to learn everything about Xamarin.Forms 5.0.
              From Stack layout, Xaml Grid, Absolute layout, Relative layout, Embedded Images, contest actions to data access layer and MVVM"
              link="https://github.com/garygaryzhang/XamarinHelloWorld"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AngularJS Web Application"
              description="A multiple Web pages application allowing users to do CRUD operations. 
              Users can commnicate within the system through the message page. 
              Using AngularJS 1.5 structural framework for dynamic web apps. 
              Using Bootstrap3 to create all responsive web components. 
              Using JavaScript creating the logic which app needed and creating validations of the web forms. 
              HTML5, JSON and Ajax are involved in this application."
              link="https://github.com/garygaryzhang/AngularJS-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentManagement}
              isBlog={false}
              title="Student Management System"
              description="A Single Web page application allowing students to do CRUD operations.
              Using jQuery 3.1.1 to traverse, manipulate and control events.
              Using HTML5 and Bootstrap3 to create all responsive web page.
              Using JavaScript creating the logic which app needed and creating validations of the web forms.
              JSON and Ajax are used in this web-application."
              link="https://github.com/garygaryzhang/jQuery-Student-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={android}
              isBlog={false}
              title="Andriod Chat Application"
              description="A group project which designed and implemented a chatting application on Android system.
              Developed the app can run on any devices are Android 4.4 or newer using JAVA.
              Implemented RESTful API to allow the app to interface with AWS."
              link="https://github.com/garygaryzhang/Android-Chatting-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={turing}
              isBlog={false}
              title="Cryptography algorithms implementations"
              description="Finished the project Enigma Machine Simulation, implemented the permutation encryption using C++.
              Finished the project Diffie-Hellman key exchange using an elliptic curve in C++.
              Finished the implementation of El Gamal cryptosystem for secure communication over Internet."
              link="https://github.com/garygaryzhang/Cryptography"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datamining}
              isBlog={false}
              title="Supervised Data Mining Classification"
              description="Implemented NAIVE BAYES and DECISION TREES(J48) algorithm in JAVA and R.
              Analyzed and compared the efficiency of these two classification algorithms using Weka 3.8.0."
              link="https://github.com/garygaryzhang/Supervised-Data-Mining-Classification"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
