import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';
const LoginPage = () => {
    return (
        <Container className='custom-width  mx-auto'>
            <h2>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Text className="text-muted">

                </Form.Text>
                <Form.Text className="text-muted">

                </Form.Text>
                <Button className='w-100' variant="secondary" type="submit">
                    Login
                </Button>
            </Form>
            <Form.Text className="text-muted">
                Do not have an account? <Link className='text-danger ps-1' to='/register'>Register</Link>
            </Form.Text>
        </Container>
    );
};

export default LoginPage;