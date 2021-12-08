import React from 'react'
import logo from '../assets/stk.jpg'
import {Card, Container, Row, Col, DropdownButton, Dropdown, ButtonGroup} from 'react-bootstrap'
import Chart from 'chart.js/auto';

import {Line, Pie} from 'react-chartjs-2'
import Button from '@restart/ui/esm/Button';
const MainPanel = ({Xstock, Ystock, isRender, Duration, ApiGet}) => {
    let span;
    if(isRender){
        span=<Line
        data={{
            labels: Xstock,
            datasets:[{
                label:'Price',
                data:Ystock
            }]
        }}
    />
        
    }else{
        span=<Card.Img variant="top" src={logo} />
    }
    return (
        <div>
            <Card style={{ width: '640', height:'30rem' }} bg='light'>
                <Card.Body>
                    <Container >
                        <Row>
                            <Col xs={8}>
                            <Card.Title >Crypto Statistic</Card.Title>
                            </Col>
                            <Col>
                            <Dropdown as={ButtonGroup}>
                                <Button variant="success" onClick={ApiGet}>Chart</Button>

                                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                        <Dropdown.Item  onClick={()=>{Duration(1)}}>14 days</Dropdown.Item>
                                        <Dropdown.Item  onClick={()=>{Duration(2)}}>1 month</Dropdown.Item>
                                        <Dropdown.Item  onClick={() => Duration(3)}>6 months</Dropdown.Item>
                                        <Dropdown.Item  onClick={() => Duration(4)}>1 year</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                
                            </Col>
                            
                            
                        </Row>
                        {span}
                        
                        
                        
                   </Container>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default MainPanel
