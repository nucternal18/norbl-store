import React, { Component } from 'react';// eslint-disable-next-line
import Product from '../Product';
import { ProductConsumer } from '../../Context';




class CarouselSlider extends Component {


    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                {/* <li
                                    className={
                                        this.props.index === this.props.activeIndex
                                            ? "carousel__slide carousel__slide--active"
                                            : "carousel__slide"
                                    }
                                > */}
                                    <ProductConsumer>
                                        {value => {
                                            return value.products.map(product => {
                                                let id = product.id;
                                                        return (
                                                        
                                                            <Product  product={product} key={id}/>    
                                                                
                                                        )
                                                    })
                                        }}
                                    </ProductConsumer>
                                    
                                </div>
                            </div>
                            <a className="carousel-control-prev " href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon bg-secondary" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next " href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon bg-secondary" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselSlider;