import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link"  to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/contact">Table Data</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/about">About</Link>
                        </li>
                    </ul>
                </div>

                <Link className="btn btn-primary" to="/products/add">Add Product</Link>

            </div>
        </nav>
    )
}

export default Navbar;