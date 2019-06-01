import React from 'react';
import { ButtonContainer } from '../CartButton';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import NavMenu from './NavMenu/NavMenu';
import './NavBar.css';



const  NavBar = (props) => {
    return (
        <nav className="navbar bg-dark navbar-expand-sm navbar-dark " >
            <div className="mt-2 navbar-nav">
                <NavMenu show={props.show}/>
            </div>
            <div className="mx-auto ">
            <span className="w-100 d-lg-none d-block"/>
                <img src={logo} alt="logo" className="navbar-nav" width="50" height="50" />
            </div>
            <div className="ml-0">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/cart" className="nav-link">
                            <ButtonContainer>
                                <span>
                                <i className="fa fa-cart-plus"/>
                                </span>
                            </ButtonContainer>
                        </NavLink>
                    </li>
                </ul>
            </div>
            </nav>
        
    )
}

export default NavBar;