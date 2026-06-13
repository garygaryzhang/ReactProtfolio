import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    dark: ["#d9f2fc", "#84adf5", "#6576f6", "#2f36f4", "#0028b8"],
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="blue">Code</strong>
      </h1>
      <GitHubCalendar
        username="garygaryzhang"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
        colorScheme="dark"
      />
    </Row>
  );
}

export default Github;
