import React, {Component} from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem/NavItem';


class NavMenu extends Component {
    state = {
        menuOpen: true,
    }

    handleMenuOpen = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }
    
    
    
    render() {

        return (
            
            <NavBurger>
                    <div className="navMenu" >
                        <input type="checkbox" className="toggler"></input>
                        <div className="hamburger" ><div></div></div>
                        <div className={`menu ${(this.state.menuOpen ? 'show' : 'hidden')}`} onClick={() => this.handleMenuOpen} >
                            <div>
                            <div>
                                <ul >
                                    <li onClick={() => this.handleMenuOpen} ><NavItem link="/" ><h4>Home</h4></NavItem></li>
                                    <li onClick={() => this.props.hide} ><NavItem link="/catalogue" ><h4>Catalogue</h4></NavItem></li>
                                    <li onClick={() => this.props.hide}><NavItem link="/about_us"><h4>About Us</h4></NavItem></li>
                                    <li onClick={() => this.props.hide}><NavItem link="/contact_us"><h4>Contact Us</h4></NavItem></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
            </NavBurger>
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

.menu > div > div > ul > li > h4 {
color: white;
text-decoration: none;
transition: color 0.4s ease;
}

h4 {
color: #fff;
text-decoration: none;
}

.closeMenu {
    background: transparent;
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
}
.closeMenu::before {
    -webkit-transform: translateY(-6px) rotate(45deg);
            transform: translateY(-6px) rotate(45deg);
}
.closeMenu::after {
    -webkit-transform: translateY(6px) rotate(-45deg);
            transform: translateY(6px) rotate(-45deg);
}


` 

export default NavMenu;
