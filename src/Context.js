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
        cart: [],
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

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product
    }

    handleDetail = id => {
        const product = this.getItem(id)
        this.setState(() => {
            return {detailProduct: product}
        })
    }

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {products: tempProducts, cart: [...this.state.cart], product}
        }, () => {console.log(this.state)})
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
