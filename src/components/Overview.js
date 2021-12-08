import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
const Overview = ({para}) => {
    return (
        <div  >
            <Card>
                <Card.Body dangerouslySetInnerHTML={{__html: para}}>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Overview
