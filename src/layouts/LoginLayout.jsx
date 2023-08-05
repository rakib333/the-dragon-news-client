import { Container } from "react-bootstrap";
import NavigationBar from "../pages/sharedPages/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";


const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className="mt-5">
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default LoginLayout;