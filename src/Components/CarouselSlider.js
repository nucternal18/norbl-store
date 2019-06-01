import React, { Component } from 'react';

//import Input from '../../components/UserInput/Input';

import '../App.css'
import iphonecasesforsale from '../Images/iphonecasesforsale.jpg';
import closeupiphonecases from '../Images/closeupiphonecases.jpg';
import colorfuliphone6cases from '../Images/colorfuliphone6cases.jpg';
import pileofsmartphonecases from '../Images/pileofsmartphonecases.jpg';




class CarouselSlider extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
            imgUrls: [
                {
                    img: iphonecasesforsale,
                    alt: 'image 1'
                },
                {
                    img: closeupiphonecases,
                    alt: 'image 2'
                },
                {
                    img: colorfuliphone6cases,
                    alt: 'image 3'
                },
                {
                    img: pileofsmartphonecases,
                    alt: 'image 4'
                }],
            currentImageIndex: 0,
        };
    }
    render() {
        return (
            <div>
                {/* <Slide images={this.state.imgUrls} /> */}
            </div>
        )
    }
}

export default CarouselSlider ;