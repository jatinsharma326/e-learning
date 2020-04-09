import React from 'react';
import './header.scss';
import { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

class Header extends Component{
    
    render(){
       
        return (
                <div>
                  <Navbar className= 'topbar'bg='light' expand = "lg">
                    <Navbar.Brand href="home">Udaciclone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                       <Link to = {"/"} style = {{textDecoration:'none'}}> <Nav.Link href="*">Home</Nav.Link></Link>
                        <Nav.Link href="*">Tuts</Nav.Link>
                        </Nav>
                        <Nav>
                       <Link  to = {"/login"} style={{ textDecoration: 'none' }} > <Button variant="contained"  color='primary'>Login</Button></Link>&nbsp;&nbsp;
                        <Link  to = {"/register"} style={{ textDecoration: 'none' }} ><Button variant="contained" color='secondary'>SingUp</Button></Link>
                        </Nav>
                    </Navbar.Collapse>
                  </Navbar>

                  </div>
        )
    }
}


export default Header;
