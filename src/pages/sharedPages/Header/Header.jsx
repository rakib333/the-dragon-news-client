import moment from 'moment/moment';
import logo from '../../../assets/logo.png';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {

    return (
        <div>
            <div className='text-center mt-5'>
                <img src={logo} alt="" />
                <p className='mb-0'>Journalism Without Fear or Favour</p>
                <p><small>{moment().format("dddd, MMMM D, YYYY")}</small></p>
            </div>
            <Container className='mb-5'>
                <div className='d-flex bg-secondary p-3 rounded-1'>
                    <button className='btn btn-danger'>Latest</button>
                    <Marquee className='text-light'>
                        I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
            </Container>

        </div>
    );
};

export default Header;