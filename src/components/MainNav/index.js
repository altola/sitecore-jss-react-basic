import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const MainNav = ({ fields }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        {fields.NavItems.map((navItem, i) =>
          <li className="nav-item active">
            <a className="nav-link" href="#"> <Text field={navItem.fields.pageTitle} />  <span className="sr-only">(current)</span></a>
          </li>
        )}
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

);

export default MainNav;
