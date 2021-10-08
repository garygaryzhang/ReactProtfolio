import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Gary Zhang </span> <span className="grey">he/him </span>
            currently located in <span className="blue"> Nashville, TN, USA.</span>
            <br />I am a software developer with 5+ industry experience, currentlu working for <a target="_blank" href="https://www.efcsystems.com/">EFC Systems, Inc.</a>
            <br />I graduated from <a target="_blank" href="https://www.usnews.com/best-graduate-schools/top-science-schools/new-jersey-institute-of-technology-185828">New Jersey Institute of Technology</a> with a master degree of computer science.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 3D Printing
            </li>
            <li className="about-activity">
              <ImPointRight /> Skateboading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
