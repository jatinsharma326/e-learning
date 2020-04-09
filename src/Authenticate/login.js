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

 class Login extends Component{
    render(){
        return (
                <Container>
                        <Card className = 'cards'>
                            <Form>
                                <CardContent>
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
                                </CardContent>
                                <CardActions>
                                    <Button variant = 'contained' color = 'secondary'>Login</Button>
                                </CardActions>
                            </Form>
                            
                        </Card>
                </Container>
        )
    }
}

export default Login;

