import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem';
import './NavMenu.css'

class NavMenu extends Component {
    state = {
        toggler: true,
    }

    closeMenu = () => {
        this.setState({
            toggler: true,
        })
    }
    render() {
        
        return (
            <div className="NavMenu">
                <input type="checkbox" className="toggler"></input>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul >
                                <li><NavItem link="/" exact><h4>Home</h4></NavItem></li>
                                <li><NavItem link="/catalogue" ><h4>Catalogue</h4></NavItem></li>
                                <li><NavItem link="/about_us"><h4>About Us</h4></NavItem></li>
                                <li><NavItem link="/contact_us"><h4>Contact Us</h4></NavItem></li>
                            </ul>
                        </div>
                    </div>
            
                </div>

            </div>
        )
    }
}

export default NavMenu;
