import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'

const RightPanel = ({todayHigh, todayLow, volume, marketCap}) => {
    //let StockSymbol={Name};
    //console.log(Name);
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
   // console.log(todayLow);
    return (
        <div>
            <Container >
                <Row className="align-items-center">

                    <Col>
                    <Card style={{ width: '18rem' ,height: '20rem' }}>
                        
                        <Card.Body>
                            <Row>
                                <Col>
                                <Card.Title>Today's High</Card.Title>
                                <Card.Text >${todayHigh}</Card.Text>
                                </Col>
                                <Col>
                                <Card.Title>Today's low</Card.Title>
                                <Card.Text >${todayLow}</Card.Text>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col>
                                <Card.Title>24h Volume</Card.Title>
                                <Card.Text >${volume}</Card.Text>
                                </Col>
                                <Col>
                                <Card.Title>Market Cap</Card.Title>
                                <Card.Text >${marketCap}</Card.Text>
                                </Col>
                            
                            
                            </Row>
                           
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' ,height: '20rem' }}>
                    <Card.Body>
                            <Card.Title >Prediction</Card.Title>
                            <Button variant="primary">Predict</Button>
                            </Card.Body>
                    </Card>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default RightPanel
