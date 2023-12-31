import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/sharedPages/Footer/Footer";
import Header from "../pages/sharedPages/Header/Header";
import LeftNav from "../pages/sharedPages/LeftNav/LeftNav";
import RightNav from "../pages/sharedPages/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/sharedPages/NavigationBar/NavigationBar";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;