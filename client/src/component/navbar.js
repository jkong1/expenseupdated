import React, {Component} from 'react'
import {Nav, NavItem, NavLink, Navbar, NavbarBrand} from 'reactstrap'
import {Link} from 'react-router-dom'


class navbar extends Component {

    render() {
        const Background_Color = {
            background:'rgb(13, 15, 15)',
            width:'80%',
            margin:'auto'
          };
          const fontColor = {
              color:'#719192',
          }
        return(
            <div>
                <Navbar style={Background_Color}>
                    <NavbarBrand href='/' style={fontColor}>Ticket Master</NavbarBrand>
                    <Nav>
                        <NavLink href='/login' style={fontColor}>Login In</NavLink>
                        <NavLink  href='/signup' style={fontColor}>Sign Up</NavLink>
                    </Nav>
                </Navbar>

            </div>
        )
    }
}

export default navbar;