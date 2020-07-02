import React, {Component} from 'react'
import {Nav, NavItem, NavLink, Navbar, NavbarBrand} from 'reactstrap'


class Nav_Bar2 extends Component {
    render(){
        return(
            <div>
                <Navbar>
                    <NavbarBrand className="text-light" href='/home'>Expense Master</NavbarBrand>
                    <Nav>
                        <NavLink className="text-light" href='/Input'>Input</NavLink>
                        <NavLink className="text-light" href='/contact' >Setting</NavLink>
                        <NavLink className="text-light" href='/contact' >Log Out</NavLink>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Nav_Bar2
