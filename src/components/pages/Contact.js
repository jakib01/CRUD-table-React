import React from 'react';

const Contact = () =>{
    return (
        <div className="container">
            <div className="py-4">
                <h1>Contact Page</h1>

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password" />
                    </div>
                    <div className="form-group py-4">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Contact;