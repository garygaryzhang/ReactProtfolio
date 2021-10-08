import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        {<Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>}
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              companyInfo="EFC Systems Inc - Brentwood, TN, USA"
              title="Software Developer"
              date="August 2017 - Current"
              content={[
                "ERP Applications on Desktop/Mobile/Tablet/Web Service Integration/Windows Service.",
                "Developing, implementing and maintaining a windows desktop, service application: MerchantAg and MerchantSRV, primarily developed in .NET 4.8 and Microsoft SQL Server 2017.",
                "Developing, implementing and maintaining an Android, iOS and UWP mobile application: MagMobile, developed in Xamarin 5.0.0 and Asp.Net WebApi 5.2.7.",
                "Developing, implementing and maintaining an UWP application: MagExpress, developed in UWP 1.21.0 and Entity Framework Core 1.1.1.",
                "Developing, implementing and maintaining public, internal APIs and APIs for third party integrations, primarily developed in Asp.Net Core 2.0.2.",
                "Designing and Building Windwos Forms, mobile UI and Xaml Forms using infragistics UltimateUI for Windows Forms Xamarin Forms and WPF as UI layer/view.",
                "Creating business logic, DTOs using C#, LINQ and SQL.",
                "Responsible in developing Sql repositories, Queries, Stored Procedures and Indexes for database transactions on SQL Server 2019",
                "Expert in creating reports using Crystal Reports and GrapeCity C1 Report.",
                "In charge of the documentation and decoration of all public APIs within the organization using Swagger following OpenAPI 3.0 Specification.",
                "Familiar with ReadyRoll and DbUp for database development and deployment.",
                "Following TDD development process with writing test cases first and creating Unit Tests using MSTest.",
                "Using Azure Devops, Microsoft Test Flight and Git for Continuous Integration, building and releasing process.",
                "Working under Scrum team environment with sprint planning, daily stand up, efforts estimation, functional design, functional review and retrospective meetings during every Sprint, strictly following Agile mythology."
              ]}
            />
            <Resumecontent
              companyInfo="Marlabs Inc - Piscataway, NJ, USA"
              title="Fullstack .NET Developer"
              date="December 2016 - August 2017"
              content={[
                "An online web portal for customers to view their loan.",
                "Participated in the development and implementation of the power web application primarily developed in ASP.NET 4.5 and React 15.3.0.",
                "Designing and Building RESTful Web Services with ASP.NET Web API 2 hosted by IIS 8.0.",
                "Developing Controllers, Models, DTOs and Business Logic using C#.",
                "Involved in front end development using React 15.3.0, HTML5, CSS3, Bootstrap 3 and JavaScript.",
                "Responsible in developing Queries, Stored Procedures, Views and Indexes using MS SQL on SQLServer 2014.",
                "Involved in deploying the content Cloud platform on AWS using EC2, S3, CloudFront, Route 53, Certificate Manager, AWS Lambda and API Gateway.",
                "Working under TDD environment and Unit Testing using NUnit.",
                "Continuous Integration, building and release process using TFS 2013.",
                "Active role in trouble shooting using Postman.",
                "Performed production support and trouble shooting, including website/portal monitoring and maintenance while following Agile Methodology to produce high quality software and satisfying the customers",
                "Using Google Visualization API creating the Data Visualization, Mapping, and Real-Time Visualization."
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title"></h3>
            <Resumecontent
              companyInfo="Dealfar LLC - Haslett, MI, USA"
              title=".NET Developer"
              date="May 2016 - December 2016"
              content={[
                "An online insurance web portal.",
                "Developed Razor views with strongly typed view models, helpers and partial views using ASP.NET MVC 4.0, CSS3, HTML5 and C#.",
                "Implemented CRUD functionalities with MS SQL in ASP.NET MVC 5.2.",
                "Created the Data access layer and Data transfer objects using C# and LINQ.",
                "Created SQL queries, Stored Procedures, Views and Triggers in SQL.",
                "Provided secure login functionality by implementing .NET Form-based Authenticationand Role Based Security that handles login checking for the manger/employee of a particular department or the administrator so that the user can update the proper information, day-by-day activities.",
                "Followed Agile Methodology which involves daily Scrum meetings and Sprint meetings (planning, Review, Retro) to meet deadlines and expectations, programming using TDD process and continuous integration using the TFS 2013.",
              ]}
            />

            <h3 className="resume-title">Education</h3>
            <Resumecontent
              companyInfo="New Jersey Institute of Technology - Newark, NJ, USA"
              date="September 2014 - May 2016"
              content={["MASTER OF SCIENCE IN COMPUTER SCIENCE, GPA 3.80/4.00."]}
            />
            <Resumecontent
              companyInfo="Southwest University - Chongqing, China"
              date="September 2010- June 2014"
              content={["BACHELOR OF ENGINEERING IN ELECTRONIC SCIENCE AND TECHNOLOGY, GPA 3.20/4.00."]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
