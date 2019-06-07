import React from 'react';
import { NavLink } from 'react-router-dom'; // eslint-disable-next-line
import PayPalButton from './PayPalButton';

export default function CartTotal({value, history}) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-6 ml-md-auto ml-auto col-sm-8 text-capitalize text-right">
                        <NavLink to="/">
                            <button className="btn btn-outline-danger text-uppercase mb3 px-5" type="button" onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </NavLink>
                        <h5>
                            <span className="text-title">
                                subtotal :
                            </span>
                            <strong>$ {cartSubTotal.toFixed(2)}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Tax :
                            </span>
                            <strong> $ {cartTax.toFixed(2)}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Total :
                            </span>
                            <strong>$ {cartTotal.toFixed(2)}</strong>
                        </h5>
                        {/* <PayPalButton total={cartTotal} clearCart={clearCart} history={history} /> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
