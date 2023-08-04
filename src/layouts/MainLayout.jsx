import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/sharedPages/Footer/Footer";
import Header from "../pages/sharedPages/Header/Header";
import LeftNav from "../pages/sharedPages/LeftNav/LeftNav";
import RightNav from "../pages/sharedPages/RightNav/RightNav";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <h2>Main content coming.....</h2>
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