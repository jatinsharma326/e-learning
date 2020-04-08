import React from 'react';
import './header.scss';
import { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Button } from '@material-ui/core';


class Header extends Component{
    
    render(){
       
        return (
                <div>
                  <Navbar className= 'topbar'bg='light' expand = "lg">
                    <Navbar.Brand href="home">Udaciclone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="*">Home</Nav.Link>
                        <Nav.Link href="*">Tuts</Nav.Link>
                        </Nav>
                        <Nav>
                        <Button Link to = "/login" variant="contained" color='primary'>Login</Button>&nbsp;&nbsp;
                        <Button variant="contained" color='secondary'>SingUp</Button>
                        </Nav>
                    </Navbar.Collapse>
                  </Navbar>

                  </div>
        )
    }
}


export default Header;
