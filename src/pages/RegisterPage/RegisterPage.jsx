import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { sendEmailVerification } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const RegisterPage = () => {

    const { createUser, updateUser } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [accepted, setAccepted] = useState(false);

    const handleCheck = e => {
        const check = e.target.checked;
        setAccepted(check)
    }

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log()

        if (password.length < 6) {
            setError('password must be 6 characters')
            return
        }

        if (!/(?=.{6,})/.test(password)) {
            setError('password must be 6 characters')
            return
        }

        if (password !== confirmPassword) {
            return alert('password did not match')
        }


        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                setSuccess('user created successful')
                // set name and photo url
                updateUser(createdUser, name, photo)
                    .then(() => {
                        console.log('photo updated')
                    })
                    .catch(error => {
                        console.log(error)
                    })

                // send verification email

                sendEmailVerification(createdUser)
                    .then(() => {
                        toast.success('Verify your email')
                    })
                    .catch(error => {
                        console.log(error)
                        toast.error(error.message)
                    })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }


    return (
        <Container className='custom-width mx-auto'>
            <h2>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
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
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handleCheck} name='accepted' label="Accept terms and conditions" />
                </Form.Group>
                <Form.Text className="text-danger">
                    {error && error}
                </Form.Text>
                <Form.Text className="text-muted">
                    {success && success}
                </Form.Text>
                <Button className='w-100' disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <Form.Text className="text-muted">
                Already have an account? <Link className='text-danger ps-1' to='/login'>Login</Link>
            </Form.Text>
            <ToastContainer />
        </Container>
    );
};

export default RegisterPage;