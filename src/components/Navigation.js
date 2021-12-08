import React,{useState} from 'react'
import { Navbar, Nav } from 'react-bootstrap';

import { Container } from 'react-bootstrap';

import {Form, FormControl, Button, } from 'react-bootstrap'
 const Navigation = ({ApiGet, Rename}) => {
    
    const handleClick = () =>{
        let x ='';
        x=document.getElementById('name').value;
        //console.log(x);
        Rename(x)
    }
    
    return (
        <div>

            <Navbar bg="light" expand="lg" header>
            <Container fluid>
            <Navbar.Brand href="#home">Crypto Prediction</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav.Link href="#features">Overview</Nav.Link>
                <Nav.Link href="#pricing">Blog</Nav.Link>
                <div className="navbar-collapse justify-content-end ">
                <Form className="d-flex ">
                    <FormControl
                        id="name"
                        type="search"
                        name="myCountry"
                        placeholder="Search Stocks..."
                        className="me-2 autocomplete"
                        aria-label="Search"
                        onKeyUp= {handleClick}
                    />
                    
                    <Button variant="outline-success" className="autocomplete" onClick={ApiGet}>Search</Button>
                    
                    </Form>

                
                    
                </div>
            </Container>
            </Navbar>
        </div>
    );
}
export default Navigation
