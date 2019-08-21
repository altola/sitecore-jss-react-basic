import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    if (this.props.context.pageEditing === true) {
      return null;
    }

    const home =
      this.props.context.navigation && this.props.context.navigation.length > 0
        ? this.props.context.navigation[0]
        : null;
    const navLinks = home && home.children ? home.children : [];

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={RouterNavLink} to="/">
            JSS bootcamp
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navLinks.map((navLink, index) => (
                <NavItem key={index}>
                  <NavLink tag={RouterNavLink} to={navLink.path}>
                    {navLink.name}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
