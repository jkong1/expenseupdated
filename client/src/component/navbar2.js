import React, {Component} from 'react'
import {Nav, NavItem, NavLink, Navbar, NavbarBrand} from 'reactstrap'


class Nav_Bar2 extends Component {
    render(){
        return(
            <div>
                <Navbar>
                    <NavbarBrand href='/home'>Expense Master</NavbarBrand>
                    <Nav>
                        <NavLink href='/Input'>Input</NavLink>
                        <NavLink  href='/contact' >Setting</NavLink>
                        <NavLink  href='/contact' >Log Out</NavLink>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Nav_Bar2
