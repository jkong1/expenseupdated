import React, {Component} from 'react'
import {Nav, NavItem, NavLink, Navbar, NavbarBrand} from 'reactstrap'


class Nav_Bar2 extends Component {
    render(){
        return(
            <div>
                <Navbar>
                    <NavbarBrand href='/home'>Ticket Master</NavbarBrand>
                    <Nav>
                        <NavLink href='/input'>Login In</NavLink>
                        <NavLink  href='/contact' >Sign Up</NavLink>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Nav_Bar2
