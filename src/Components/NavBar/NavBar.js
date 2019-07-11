import React, { Component} from 'react';
import { ButtonContainer } from '../CartButton';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';// eslint-disable-next-line
import NavMenu from './NavMenu/NavMenu';
import styled from 'styled-components';
import NavItem from './NavItem/NavItem';
import { ProductConsumer } from '../../Context';
import './NavBar.css';



class NavBar extends Component {

    render() {
        return (
            <nav className="navbar bg-dark navbar-expand-sm navbar-dark fixed-top " >
                <div className="mt-2 navbar-nav">
                    <NavBurger>
                        <ProductConsumer>
                            {value => (
                                    <div className="navMenu" >
                                    <input type="checkbox" className="toggler"></input>
                                    <div className="hamburger" ><div></div></div>
                                    {value.menuOpen ?
                                        <div className="menu">
                                            <div>
                                                <div onClick={() => value.closeMenu()}>
                                                    <ul >
                                                        <li><NavItem link="/"><h4 onClick={() => value.closeMenu()}>Home</h4></NavItem></li>
                                                        <li onClick={() => value.closeMenu()} ><NavItem link="/catalogue" ><h4>Catalogue</h4></NavItem></li>
                                                        <li onClick={() => value.closeMenu()}><NavItem link="/about_us"><h4>About Us</h4></NavItem></li>
                                                        <li onClick={() => value.closeMenu()}><NavItem link="/contact_us"><h4>Contact Us</h4></NavItem></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        : <div className="menuClosed">
                                        <div>
                                            <div onClick={() => value.closeMenu()}>
                                                <ul >
                                                    <li><NavItem link="/"><h4 onClick={() => value.closeMenu()}>Home</h4></NavItem></li>
                                                    <li onClick={() => value.closeMenu()} ><NavItem link="/catalogue" ><h4>Catalogue</h4></NavItem></li>
                                                    <li onClick={() => value.closeMenu()}><NavItem link="/about_us"><h4>About Us</h4></NavItem></li>
                                                    <li onClick={() => value.closeMenu()}><NavItem link="/contact_us"><h4>Contact Us</h4></NavItem></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                                
                            )}
                        </ProductConsumer>
                    </NavBurger>
                </div>
                <div className="mx-auto ">
                    <span className="w-100 d-lg-none d-block" />
                    <img src={logo} alt="logo" className="navbar-nav" width="50" height="50" />
                </div>
                <div className="ml-0">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/cart" className="nav-link">
                                <ButtonContainer>
                                    <span>
                                        <i className="fa fa-cart-plus" />
                                    </span>
                                </ButtonContainer>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        
        )
    }
}

const NavBurger = styled.div`
.navMenu {
position: absolute;
top: 1px;
left: 0;
z-index: 1;
text-decoration: none;
}

.toggler {
position: absolute;
top: 0;
left: 0;
z-index: 2;
cursor: pointer;
width: 50px;
height: 50px;
opacity: 0;
text-decoration: none;
}

.hamburger {
position: relative;
top: 1.2rem;
left: 10px;
z-index: 1;
width: 30px;
height: 20px;
padding: 1rem;
background: inherit;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;

}

/* Hamburger Line*/
.hamburger > div {
position: absolute;
flex: none;
width: 100%;
height: 2px;
background-color: rgba(5, 162, 201, 0.45);
display: flex;
align-items: center;
justify-content: center;
transform: all 0.4s ease;
text-decoration: none;
}
/* Top and Bottom */
.hamburger > div::before,
.hamburger > div::after {
content: '';
position: absolute;
z-index: 1;
top: -10px;
width: 100%;
height: 2px;
background: inherit;
text-decoration: none;
}

/* Moves Lines down */
.hamburger > div::after {
top: 10px;
}

/* Toggler Animate*/

.toggler:checked + .hamburger > div {
z-index: 1;
transform: rotate(135deg);
}

/* Turn line to X */
.toggler:checked + .hamburger > div:before,
.toggler:checked + .hamburger > div:after {
z-index: 1;
top: 0;
transform: rotate(90deg);
}

/* Rotate on hover when checked */

.toggler:checked:hover + .hamburger h4 > div {
transform: rotate(225deg);
}

/* Show Menu */

.toggler:checked ~ .menu  {
visibility: visible;
}

.toggler:checked ~ .menu > div {
transform: scale(1);
transition-duration: var(--menu-speed);
}

.toggler:checked ~ .menu > div > div  {
opacity: 1;
transition: opacity o.4s ease 0.4s;

}

.closeMenu {
    display: none
}

.menu {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
visibility: Hidden;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
transition: transform 0.3s ease-out;

}

.menu > div {
background: var(--overlay-color);
border-radius: 50%;
width: 200vw;
height: 250vw;
display: flex;
flex: none;
align-items: center;
justify-content: center;
transform: scale(0);
transition: all 0.4s ease;
text-decoration: none;
}

.menu > div > div {
text-align: center;
max-width: 90vw;
max-height: 100vw;
opacity: 0; 
transition: opacity 0.4s ease;
text-decoration: none;
}

.menu > div > div > ul > li {
list-style: none;
color: #fff;
font-size: 1.5rem;
padding: 1rem;
text-decoration: none;
}


.menuClosed {
    display: none;
} 

` 

export default NavBar;