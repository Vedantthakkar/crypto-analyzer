import React from "react";
import { Card } from "react-bootstrap";
import "../styles/Overview.css";

const Overview = ({ para }) => {
  return (
    <div>
      <Card className="overview__main">
        <Card.Body dangerouslySetInnerHTML={{ __html: para }}></Card.Body>
      </Card>
    </div>
  );
};

export default Overview;
