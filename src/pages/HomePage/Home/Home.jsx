import { useLoaderData } from "react-router-dom";
import NewsCard from "../../NewsPage/NewsCard/NewsCard";



const Home = () => {
    const categoryNews = useLoaderData();
    return (
        <div className="mt-5">
            {
                categoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Home;