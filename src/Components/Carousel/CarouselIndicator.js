import React from 'react';
import './Carousel'

const CarouselIndicator = () => {
    return (
        <div>
            <li>
                <div
                    className={
                        this.props.index === this.props.activeIndex
                        ? "carousel__indicator carousel__indicator--active"
                        : "carousel__indicator"
                    }
                    onClick={this.props.onClick}/>
            </li>
        </div>
    )
}

export default CarouselIndicator
