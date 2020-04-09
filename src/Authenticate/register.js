import React,{Component} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from '@material-ui/core';
import {Card,CardActions,CardContent} from '@material-ui/core';
import {Container} from 'react-bootstrap';

// const useStyles = makeStyles({
//     root:{
//         minWidth:275,
//     },
//     bullets:{
//         display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//     },
//     title: {
//         fontSize: 14,
//       },
//       pos: {
//         marginBottom: 12,
//       },
// })

 class Register extends Component{
    render(){
        return (
                <Container>
                        <Card className = 'cards'>
                            <Form>
                                <CardContent>
                                    <Form.Group controlId='formBasciEmail'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type='name' placeholder='Enter name'/>
                                    </Form.Group>
                                    <Form.Group controlId='formBasciEmail'>
                                        <Form.Label>username</Form.Label>
                                        <Form.Control type='username' placeholder='username'/>
                                    </Form.Group>
                                    <Form.Group controlId='formBasciEmail'>
                                        <Form.Label>email</Form.Label>
                                        <Form.Control type='email' placeholder=' email'/>
                                    </Form.Group>
                                    <Form.Group controlId='formBasciPassword'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type='Password' placeholder='Password'/>
                                    </Form.Group>
                                    {/* <Form.Group controlId='formBasciPassword'>
                                        <Form.Label>Verify Password</Form.Label>
                                        <Form.Control type='Password' placeholder='Verify Password'/>
                                    </Form.Group> */}
                                </CardContent>
                                <CardActions>
                                    <Button variant = 'contained' color = 'secondary'>SignUp</Button>
                                </CardActions>
                            </Form>
                            
                        </Card>
                </Container>
        )
    }
}

export default Register;

