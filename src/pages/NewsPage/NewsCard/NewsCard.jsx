import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import './NewsCard.css';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import moment from "moment";
import Rating from "react-rating";



const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <Card className="mb-3">
            <Card.Header className="d-flex align-items-center">
                <Image className="card-image" src={author?.img} roundedCircle />
                <div className="ms-4">
                    <h2 className="fs-5">{author?.name}</h2>
                    <p className="mt-2 fs-6"><small>{moment(author?.published_date).format('yyyy-DD-MM')}</small></p>
                </div>
                <div className="ms-auto text-dark fs-2">
                    <FaBookmark className="me-2" />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" className="my-3" src={image_url} />
                <Card.Text>
                    {details.length === 250 ? { details } :
                        <>{details.slice(0, 250)} <Link to={`/news/${_id}`}>Read more</Link> </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div>
                    <Rating
                        placeholderRating={rating.number}
                        emptySymbol={<FaStar />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaRegStar />}
                    />
                    <span className="ps-2 pt-2">{rating?.number}</span>
                </div>

                <div className="ms-auto">
                    <FaEye />
                    <span className="ps-2">{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;