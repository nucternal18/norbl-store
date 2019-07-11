import React, { Component } from 'react';


class CarouselRightArrow extends Component {
    render() {
        return (
            <div className="carousel__arrow carousel__arrow--right" onClick={this.props.onClick}>
                <span className="fa fa-2x fa-angle-right" />
            </div>
        )
        }
    }

export default CarouselRightArrow;