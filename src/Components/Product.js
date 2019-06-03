import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';// eslint-disable-next-line
import { ProductConsumer } from '../Context';
import PropTypes from 'prop-types';


export default class Product extends Component {
    render() { // eslint-disable-next-line
        const { id, title, img, price, inCart } = this.props.product;
        return (
            
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                                <NavLink to="/product_details">
                                    <img src={img} alt="product" className="card-img-top"/>
                                </NavLink>
                                <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {value.addToCart(id)}}>
                                    {inCart ? (<p className="text-capitalize mb-0 text-dark" disabled> {" "}In Cart</p> ) : ( <i className="fa fa-cart-plus"/> )}
                                </button>
                            </div>
                        )}
                        
                    </ProductConsumer>
                    
                    {/* Card Footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>{price.toFixed(2)}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
}

.card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247)
    }
}
.img-container {
    position: relative;
    overflow: hidden;
}
.card-img-top {
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background-color: rgba(47, 66, 71, 0.45);
    border-color: none;
    border: none;
    color: white;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
}
.img-container:hover .cart-btn {
    transform: translate(0, 0);
}

.cart-btn:hover {
    color: #0894b873;
    cursor: pointer;
}

`