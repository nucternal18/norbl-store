import React, { Component } from 'react'

export default class CarouselLeftArrow extends Component {
    render() {
        return (
            <div
                className="carousel__arrow carousel__arrow--left"
                onClick={this.props.onClick}>
                <span className="fa fa-2x fa-angle-left" />
            </div>
        )
    }
}
