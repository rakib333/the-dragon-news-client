import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/sharedPages/Footer/Footer";
import Header from "../pages/sharedPages/Header/Header";
import RightNav from "../pages/sharedPages/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
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

export default NewsLayout;