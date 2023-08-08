import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "../EditorsInsight/EditorsInsight/EditorsInsight";

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;
    return (
        <div className="mt-5">
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>

                        <Button className="text-center" variant="primary"><FaArrowLeft /> All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorsInsight title={title} details={details} image={image_url}></EditorsInsight>
        </div>
    );
};

export default News;