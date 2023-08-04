import { ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png';


const RightNav = () => {
    return (
        <div className="mt-5">
            <div>
                <h4>Login with</h4>
                <button className="w-100 mb-2 btn btn-outline-primary"><FaGoogle /> Continue with google</button>
                <button className=" w-100 btn btn-outline-secondary"> <FaGithub />  Continue with github</button>
            </div>
            <div className="mt-3">
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebookF /> facebook </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>

            <div className="mt-4 position-relative text-center">
                <img className="" src={bg} alt="" />
                <div className="position-absolute top-0">
                    <h3 className="text-light mt-4 ms-5 text-center">Create an <br /> Amazing <br /> Newspaper</h3>

                    <p className="text-light text-center ms-4 mt-5">Discover thousands of <br /> options, easy to <br /> customize layouts,  one-click to  <br />import demo  <br /> and much more.</p>

                    <button className="btn btn-danger mt-5">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;