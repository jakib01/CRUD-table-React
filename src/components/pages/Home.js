import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Home = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const result = await axios.get("http://localhost:8000/api/admin/show");
        console.log(result);
        setProduct(result.data.reverse());
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
                    {products.map((product, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.image}</td>
                            <td>
                                <Link className="btn btn-primary btn-sm mr-3" to={`/users/${product.id}`}>View</Link>
                                <Link className="btn btn-outline-primary btn-sm mr-3" to={`/api/admin/update/${product.id}`}>Edit</Link>
                                <Link className="btn btn-outline-danger btn-sm mr-3" to={`/api/admin/delete/${product.id}`}>Delete</Link>
                                {/*<Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>*/}
                                {/*    Delete*/}
                                {/*</Link>*/}
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