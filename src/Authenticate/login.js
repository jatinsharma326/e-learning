import React,{Component} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from '@material-ui/core';

 class Login extends Component{
    render(){
        return (
            <div>
                <Form>
                    <Form.Group controlId='formBasciEmail'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email'/>
                        <Form.Text>
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId='formBasciPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='Password' placeholder='Password'/>
                    </Form.Group>
                    <Button variant = 'contained' color = 'success'></Button>
                </Form>
            </div>
        )
    }
}

export default Login;

