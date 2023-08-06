import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './login.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';


const LoginPage = () => {

    const { userSignIn } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || '/';

    const handleShowPass = () => {
        setShow(!show)
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        setSuccess('')

        userSignIn(email, password)
            .then(result => {
                const loggedUser = result.user;

                if (loggedUser.emailVerified !== true) {
                    toast.error('Verify your email first')
                    return
                }
                toast.success('user logged in successful')
                setError('')
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
                setSuccess('')
            })
    }




    return (
        <Container className='custom-width  mx-auto'>
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={show ? "text" : "password"} name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <button onClick={handleShowPass} className='btn btn-link'>
                        {show ? 'Hide password' : 'Show password'}
                    </button>
                </Form.Group>
                <Button className='w-100' variant="secondary" type="submit">
                    Login
                </Button>
            </Form>
            <p><small className='text-danger'>{error && error}</small></p>
            <p><small className='text-success'>{success && success}</small></p>
            <Form.Text className="text-muted">
                Do not have an account? <Link className='text-danger ps-1' to='/register'>Register</Link>
            </Form.Text>
            <ToastContainer />
        </Container>
    );
};

export default LoginPage;