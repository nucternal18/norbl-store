import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';

const NavItem = (props) => (

    
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={"active"}
        >{props.children}</NavLink>
    
)

export default NavItem;