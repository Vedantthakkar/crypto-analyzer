import React from "react";
import logo from "../assets/stk.jpg";
import {
  Card,
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import Chart from "chart.js/auto";

import { Line, Pie } from "react-chartjs-2";
import Button from "@restart/ui/esm/Button";
const MainPanel = ({ Xstock, Ystock, isRender, Duration, ApiGet }) => {
  let span;
  if (isRender) {
    span = (
      <Line
        data={{
          labels: Xstock,
          datasets: [
            {
              label: "Price",
              data: Ystock,
              backgroundColor: "green",
              borderColor: "yellow",
            },
          ],
        }}
      />
    );
  } else {
    span = <Card.Img variant="top" src={logo} />;
  }
  return (
    <div>
      <Container>
        <Row>
          <Col xs={8}>
            <div
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "40px",
                lineHeight: "47px",
              }}
            >
              Crypto Statistic
            </div>
          </Col>
          <Col>
            <Dropdown as={ButtonGroup}>
              <Button variant="success" onClick={ApiGet}>
                Chart
              </Button>

              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    Duration(1);
                  }}
                >
                  14 days
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    Duration(2);
                  }}
                >
                  1 month
                </Dropdown.Item>
                <Dropdown.Item onClick={() => Duration(3)}>
                  6 months
                </Dropdown.Item>
                <Dropdown.Item onClick={() => Duration(4)}>
                  1 year
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        {span}
      </Container>
    </div>
  );
};

export default MainPanel;
