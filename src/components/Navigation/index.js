import React from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import logo from "../../assets/jss_logo.png";
class Navigation extends React.Component {
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
    const { context } = this.props;
    const navigationItems = context.navigation[0].children;
    debugger;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <NavLink to="/" className="text-dark">
              <img src={logo} height={50} alt="Sitecore" />
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navigationItems.map((navItem, index) => {
                return navItem.children ? (
                  <UncontrolledDropdown nav inNavbar key={index}>
                    <DropdownToggle nav caret>
                      {navItem.name}
                    </DropdownToggle>
                    <DropdownMenu right>
                      {navItem.children.map((child, index) => (
                        <DropdownItem key={index}>{child.name}</DropdownItem>
                      ))}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                ) : (
                  <NavItem key={index}>
                    <NavLink className="nav-link" to={navItem.path}>
                      {navItem.name}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
