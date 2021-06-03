import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios'

const AddProduct = () => {
    let history = useHistory();
    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: "",
        image: ""
    });

    const {title, description, price, image} = product;
    const onInputChange = e => {
        setProduct({...product, [e.target.name]: e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/admin/store", product);
        history.push("/");
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A Product</h2>
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
                    <button className="btn btn-primary btn-block mt-3">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;