import { useLoaderData } from "react-router-dom";
import NewsCard from "../../NewsPage/NewsCard/NewsCard";


const Category = () => {
    // const { id } = useParams();
    const categoryNews = useLoaderData();
    console.log(categoryNews)
    return (
        <div className="mt-5">
            {
                categoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;