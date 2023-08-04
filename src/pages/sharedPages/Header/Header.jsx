import moment from 'moment/moment';
import logo from '../../../assets/logo.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <div className='text-center mt-5'>
                <img src={logo} alt="" />
                <p className='mb-0'>Journalism Without Fear or Favour</p>
                <p><small>{moment().format("dddd, MMMM D, YYYY")}</small></p>
            </div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>

                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="success">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;