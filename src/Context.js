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
        modalOpen: false,
        menuOpen: true,
        modalProduct: detailProduct,
        carouselProduct: detailProduct,
        cartSubTotal: 0,
        cartTax:0,
        cartTotal: 0,
        activeIndex: 0,
        
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
            return {products: tempProducts, cart: [...this.state.cart, product] }
        }, () => {
                this.addTotals()
            console.log(this.state)
        })
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct:product, modalOpen:true }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false }
        })
    }

    closeMenu = () => {
        this.setState(() => {
            return {menuOpen: false }
        })
    }

    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => { return { cart: [...tempCart] } }, () => {this.addTotals()})
    }

    decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;
        
        if (product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price;
            this.setState(() => { return { cart: [...tempCart] } }, () => {this.addTotals()})
        }
    }

    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id)
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index]
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts],
            }
        }, () => {
                this.addTotals()
        })
    }

    clearCart = () => {
        this.setState(() => {
            return {
                cart: [],
            }
        }, () => {
                this.setProducts();
                this.addTotals();
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total,
            }
        })
    }

    goToSlide = (index) => {
        this.setState({
            activeIndex: index
        });
    }
    
    goToPrevSlide = (e) => {
        e.preventDefault();
    
        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length;
    
        if (index < 1) {
            index = slidesLength;
        }
    
        --index;
    
        this.setState({
            activeIndex: index
        });
    }
    
    goToNextSlide = (e) => {
        e.preventDefault();
    
        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length - 1;
    
        if (index === slidesLength) {
            index = -1;
        }
    
        ++index;
    
        this.setState({
            activeIndex: index
        });
    }

    render() {
        const { children } = this.props;
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                closeMenu: this.closeMenu,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                goToSlide: this.goToSlide,
                goToPrevSlide: this.goToPrevSlide,
                goToNextSlide: this.goToNextSlide,

            }} >
                {children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
