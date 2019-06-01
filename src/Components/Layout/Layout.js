import React from 'react'; // eslint-disable-next-line
import Luxuryprod03 from '../../Images/Luxuryprod03.jpg'// eslint-disable-next-line
import CarouselSlider from '../CarouselSlider';

import './Layout.css';

const Layout = (props) => {
    return (
        <div className="Layout">
            <img src={Luxuryprod03} alt="Leather Case" className="img"/>
            {/* <CarouselSlider /> */}

            
            <div className="LayoutCards">
                
            </div>
        </div>
    )
}

export default Layout;
