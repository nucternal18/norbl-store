import React, { Component, createContext } from 'react';
import { storeProducts, detailProduct } from './data'; // eslint-disable-next-line
import ProductDetails from './Components/ProductDetails';


const ProductContext = createContext({});
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
    }
    componentDidMount() {
        this.setProducts()
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return { products: tempProducts }
        })
    }

    handleDetail = () => {
        console.log('hello from detail')
    }

    addToCart = () => {
        console.log('hello from add to cart')
    }

    render() {
        const { children } = this.props;
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
            }} >
                {children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
