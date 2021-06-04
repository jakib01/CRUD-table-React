import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
class AddProduct extends Component {

    handleFileChange = e => {
        this.setState({ file: e.target.files[0] });
    };

    titleHandleChange = e => {
        this.setState({ title: e.target.value });
    };
    descriptionHandleChange = e => {
        this.setState({ description: e.target.value });
    };
    priceHandleChange = e => {
        this.setState({ price: e.target.value });
    };

    upload = () => {
        if (this.state.file) {
            let data = new FormData();
            data.append("image", this.state.file);
            data.set("title", this.state.title);
            data.set("description", this.state.description);
            data.set("price", this.state.price);

            axios
                .post("http://localhost:8000/api/admin/store", data)
                .then(function (response) {
                    console.log(response);
                    window.location = "/"
                })
                .catch(error => console.log(error));

        }
    };

    render() {
        return (

        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A Product</h2>
                <form>
                    <div className="form-group mt-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Title"
                            name="title"
                            onChange={this.titleHandleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Description"
                            name="description"
                            onChange={this.descriptionHandleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Price"
                            name="price"
                            onChange={this.priceHandleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="file"
                            className="form-control form-control-lg"
                            placeholder="Image"
                            name="image"
                            onChange={this.handleFileChange}
                        />
                    </div>
                    <input className="btn btn-primary btn-block mt-3" type="button" onClick={this.upload} value="Add Product" />
                </form>
            </div>
        </div>

        );
    }
}

export default AddProduct;