import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.companyInfo ? "resume-title" : "resume-no-title"}>
        {props.companyInfo}
      </h5>
      <p>
        <em>{props.title}</em>
        <br/>
        <em>{props.date}</em>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
