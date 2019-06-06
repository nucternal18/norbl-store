import React, { Component } from 'react';
import './DefaultError.css';

class DefaultError extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5 ">
                        <h1 className="display-3 text-dark">404 error</h1>
                        <h2 className="text-dark">Page not found</h2>
                        <h3 className="text-dark">
                            the requested URL
                            <span className="text-danger">
                                {this.props.location.pathname}
                            </span>{" "}
                            was not found
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default DefaultError;