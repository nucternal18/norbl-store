import React, { Component } from 'react';// eslint-disable-next-line
import Product from './Product';
import { ProductConsumer } from '../Context';

class CarouselSlider extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {value => {
                        return value.products.map(product => {
                        return <Product key={product.id} product={product} />
                    })
                    }}
                </ProductConsumer>
            </div>
        )
    }
}

export default CarouselSlider;