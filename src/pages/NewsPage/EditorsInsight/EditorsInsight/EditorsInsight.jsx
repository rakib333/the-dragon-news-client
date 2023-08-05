import { Card, Col, Row } from "react-bootstrap";
import image1 from '../../../../assets/1.png';
import image2 from '../../../../assets/2.png';
import image3 from '../../../../assets/3.png';

const EditorsInsight = ({ title, details }) => {
    return (
        <div className="mt-5">
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details.slice(0, 100)}...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={image2} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details.slice(0, 100)}...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={image3} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details.slice(0, 100)}...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default EditorsInsight;