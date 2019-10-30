import React, { useState } from "react";
import { withSitecoreContext } from "@sitecore-jss/sitecore-jss-react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { NavLink as RouterLink } from "react-router-dom";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { sitecoreContext } = props;
  const navItems = sitecoreContext.navigation[0].children;

  const navChildren = navItems.map((nav, index) => (
    <NavItem key={index}>
      <NavLink tag={RouterLink} to={nav.path}>{nav.name}</NavLink>
    </NavItem>
  ));

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Grange Insurance</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {navChildren}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default withSitecoreContext()(Navigation);
