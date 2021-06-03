import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditProduct = () => {
    let history = useHistory();
    const { id } = useParams();
    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: "",
        image: ""
    });

    const {title, description, price, image} = product;

    const onInputChange = e => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadProduct();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.patch(`http://localhost:8000/api/admin/update/${id}`, product);
        history.push("/");
    };

    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:8000/api/admin/edit/${id}`);
        setProduct(result.data);
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit Product</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group mt-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Title"
                            name="title"
                            value={title}
                            onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Description"
                            name="description"
                            value={description}
                            onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Price"
                            name="price"
                            value={price}
                            onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Image"
                            name="image"
                            value={image}
                            onChange={e => onInputChange(e)}/>
                    </div>
                    <button className="btn btn-warning btn-block mt-3">Update Product</button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
