import React, { Component } from 'react';
import styled from 'styled-components'
import CartColumns from './CartColumns'
import Title from '../Title'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../../Context';
import CartList from './CartList';
import CartTotal from './CartTotal'

class Cart extends Component {
    render() {
        return (
            <Section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="Cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotal value={value} />
                                </React.Fragment>
                            )
                        } else {
                            return (
                                <EmptyCart />
                            )
                        }
                    }}
                </ProductConsumer>
            
            </Section>
        )
    }
}

const Section = styled.div``

export default Cart;
