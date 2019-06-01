import React, { Component } from 'react';
import { ProductConsumer } from '../Context'; // eslint-disable-next-line
import { NavLink } from 'react-router-dom'; // eslint-disable-next-line
import { ButtonContainer } from './CartButton';

class ProductDetails extends Component {
    render() {
        return (
            <ProductConsumer>
                
                {(value) => { console.log(value.detailProduct);// eslint-disable-next-line
                    const { id, company, img, description, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted my-5">
                                    <h1 className="text-black-50">{title}</h1>
                                </div>
                            </div>
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h3>model: {title}</h3>
                                    <h4 className="text-title text-uppercase text-muted mt3 mb-2">
                                        made by: <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-dark">
                                        <strong>
                                            price: <span>$</span> {price.toFixed(2)}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        product specification: 
                                    </p>
                                    <p className="text-muted lead">{description}</p>
                                    <NavLink to="catalogue">
                                        <ButtonContainer>
                                            back to products
                                        </ButtonContainer>
                                    </NavLink>
                                    <ButtonContainer disabled={inCart ? true : false} onClick={() => {
                                        value.addToCart(id)
                                    }}>
                                            {inCart ? "inCart" : "add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    )
                }       
            }
            </ProductConsumer>
        )
    }
}

export default ProductDetails;
