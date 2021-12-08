import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "../styles/RightPanel.css";

const RightPanel = ({ todayHigh, todayLow, volume, marketCap }) => {
  //let StockSymbol={Name};
  //console.log(Name);
  // useEffect(() => {
  //     effect
  //     return () => {
  //         cleanup
  //     }
  // }, [input])
  // console.log(todayLow);
  if (!todayHigh) return <div className="rightpanel__main" />;
  return (
    <div className="rightpanel__main">
      <div className="rightpanel__keymatrics">Key Matrics</div>
      <Row>
        <Col>
          <div className="rightpanel__first">Today's High</div>
          <div className="rightpanel__second">${todayHigh}</div>
        </Col>
        <Col>
          <div className="rightpanel__first">Today's Low</div>
          <div className="rightpanel__second">${todayLow}</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="rightpanel__first">24h Volume</div>
          <div className="rightpanel__second">${volume}</div>
        </Col>
        <Col>
          <div className="rightpanel__first">Market Cap</div>
          <div className="rightpanel__second">${marketCap}</div>
        </Col>
      </Row>
    </div>
  );
};

export default RightPanel;

//  <Container>
//    <Row className="align-items-center">
//      <Col className="rightpanel__main">
//        <Card style={{ height: "20rem" }}>
//          <Card.Body>
//            <Row>
//              <Col>
//                <Card.Title>Today's High</Card.Title>
//                <Card.Text>${todayHigh}</Card.Text>
//              </Col>
//              <Col>
//                <Card.Title>Today's low</Card.Title>
//                <Card.Text>${todayLow}</Card.Text>
//              </Col>
//            </Row>
//            <Row>
//              <Col>
//                <Card.Title>24h Volume</Card.Title>
//                <Card.Text>${volume}</Card.Text>
//              </Col>
//              <Col>
//                <Card.Title>Market Cap</Card.Title>
//                <Card.Text>${marketCap}</Card.Text>
//              </Col>
//            </Row>
//          </Card.Body>
//        </Card>
//      </Col>
//      <Col>
//  <Card style={{ width: "18rem", height: "20rem" }}>
//    <Card.Body>
//      <Card.Title>Prediction</Card.Title>
//      <Button variant="primary">Predict</Button>
//    </Card.Body>
//  </Card>
//      </Col>
//    </Row>
//  </Container>;
