import React from "react";
import {
  Text,
  Link,
  withSitecoreContext
} from "@sitecore-jss/sitecore-jss-react";
import { Jumbotron, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const Jumbo = ({ fields, context }) => {
  if (!fields) {
    return null;
  }
  const { heading, leadText, description, link, buttonType } = fields;
  const { pageEditing } = context;

  let linkComponent = (
    <NavLink to={link.value.href} className={`btn btn-${buttonType.value}`}>
      {link.value.text}
    </NavLink>
  );

  if (pageEditing) {
    linkComponent = (
      <Link className={`btn btn-${buttonType.value}`} field={link} />
    );
  }

  return (
    <div>
      <Jumbotron>
        <Text tag="h1" className="display-3" field={heading} />
        <Text tag="p" className="lead" field={leadText} />
        <hr className="my-2" />
        <Text field={description} />
        <p className="lead"></p>
        {linkComponent}
      </Jumbotron>
    </div>
  );
};

export default withSitecoreContext()(Jumbo);
