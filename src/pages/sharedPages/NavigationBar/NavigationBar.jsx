import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='bg-light'>
            <Container>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                <Nav.Link as={Link} to='/'>About</Nav.Link>
                                <Nav.Link as={Link} to='/'>Career</Nav.Link>

                            </Nav>
                            <Nav className='d-flex align-items-center'>
                                {user &&
                                    <Nav.Link as={Link} to='/login'>
                                        <FaUserCircle style={{ fontSize: '30px' }} />
                                    </Nav.Link>}
                                <Nav.Link eventKey={2}>
                                    {user ?
                                        <Button variant="success">Log Out</Button> :
                                        <Button variant="info">
                                            <Link className='text-decoration-none text-light' to='/login'>Login</Link>
                                        </Button>
                                    }
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;