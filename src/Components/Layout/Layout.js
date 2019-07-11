import React from 'react'; 
import Luxuryprod03 from '../../Images/Luxuryprod03.jpg'
import CarouselSlider from '../Carousel/CarouselSlider';// eslint-disable-next-line
import Footer from '../Footer'
import './Layout.css';

const Layout = (props) => {
    return (
        <div className="mw-100 no-gutters">
            <div className="row">
                <img src={Luxuryprod03} alt="Leather Case" className="img" />
                <div className="col-12">
                <div className="col ">
                    <div className="card mt-4">
                        <div className="card-body no-gutters">
                            <CarouselSlider />
                        </div>
                    </div>
                </div>
                <Footer /> 
                </div>
            </div>
            
        </div>
    )
}

export default Layout;
