import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context';
import { NavLink } from 'react-router-dom'; // eslint-disable-next-line
import { ButtonContainer } from './CartButton';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if(!modalOpen) {
                        return null;
                    } else {
                        return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalized p-5">
                                            <h5 className="text-dark">Item Added To The Cart</h5>
                                            <img src={img} alt="product" className="img-fluid"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted"> price: $ {price.toFixed(2)}</h5>
                                            <NavLink to="/catalogue">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    Continue Shopping
                                                </ButtonContainer>
                                            </NavLink>
                                            <NavLink to="/cart">
                                            <ButtonContainer cart onClick={() => closeModal()}>
                                                    Go to Cart
                                                </ButtonContainer>
                                            </NavLink>
                                    </div>
                                </div>

                            </div>

                        </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background: white;
}

`
