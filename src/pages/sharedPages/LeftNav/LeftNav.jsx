import { useEffect, useState } from "react";
import './leftnav.css';
import { Link } from "react-router-dom";


const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => {
                console.error(error)
            })
    }, [])
    return (
        <div className="mt-5">
            <h2>All categories</h2>
            <div className="ms-4 p-3">
                {
                    categories.map(c => <Link className="d-block text-decoration-none mb-3 " key={c.id} to={`/category/${c.id}`}>{c.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftNav;