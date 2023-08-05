import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    return (
        <Container className='w-25 mx-auto'>
            <h2>Please Register</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="terms" label="Accept terms and conditions" />
                </Form.Group>
                <Form.Text className="text-danger">
                    {error && error.message}
                </Form.Text>
                <Form.Text className="text-muted">
                    {success && <span>....</span>}
                </Form.Text>
                <Button className='w-100' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <Form.Text className="text-muted">
                Already have an account? <Link className='text-danger ps-1' to='/login'>Login</Link>
            </Form.Text>
        </Container>
    );
};

export default RegisterPage;