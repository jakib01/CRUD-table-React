import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:8000/api/admin/show");
        console.log(result);
        setProduct(result.data.reverse());
    };

    const deleteProduct = async id => {
        await axios.delete(`http://localhost:8000/api/admin/delete/${id}`);
        loadProducts();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1>Welcome to Home Page!!</h1>

                <table className="table border shadow">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {product.map((product, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>
                                <img style={{height: "40px",width: "40px"}} src="http://127.0.0.1:8000/img/1622657691.jpg" alt="new"/>
                            </td>
                            <td>
                                <Link className="btn btn-primary btn-sm mr-3" to={`/products/${product.id}`}>View</Link>
                                {/*<Link className="btn btn-primary btn-sm mr-3" to={`/product/show/${product.id}`}>View</Link>*/}
                                <Link className="btn btn-outline-primary btn-sm mr-3" to={`/products/edit/${product.id}`}>Edit</Link>
                                <Link className="btn btn-outline-danger btn-sm mr-3" onClick={() => deleteProduct(product.id)}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}
export default Home;