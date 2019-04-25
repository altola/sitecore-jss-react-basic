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
    const { fields } = this.props;
    const navigationItems = fields.data ? fields.data.item.navItems : [];

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
              {navigationItems
                .filter(item => item.pageTitle)
                .map((navItem, index) => {
                  return navItem.children && navItem.children.length > 0 ? (
                    <UncontrolledDropdown nav inNavbar key={index}>
                      <DropdownToggle nav caret>
                        {navItem.pageTitle.value}
                      </DropdownToggle>
                      <DropdownMenu right>
                        {navItem.children
                          .map((child, index) => (
                            <DropdownItem key={index}>
                              <NavLink className="nav-link" to={child.url}>
                                {child.pageTitle.value}
                              </NavLink>
                            </DropdownItem>
                          ))}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ) : (
                    <NavItem key={index}>
                      <NavLink className="nav-link" to={navItem.url}>
                        {navItem.pageTitle.value}
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
