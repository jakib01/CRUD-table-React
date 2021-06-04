import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Product = () => {

    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: "",
        image: ""
    });

    const {id} = useParams();
    useEffect(() => {
        loadProduct();
    }, []);
    const loadProduct = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/admin/show/${id}`);
        setProduct(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                back to Home
            </Link>
            <h1 className="display-4">Product Id: {id}</h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">Title: {product.title}</li>
                <li className="list-group-item">Description: {product.description}</li>
                <li className="list-group-item">Price: {product.price}</li>
                <li className="list-group-item">Image: <img style={{height: "70px", width: "70px"}} src={product.image} alt="new"/></li>
            </ul>
        </div>
    );
};

export default Product;