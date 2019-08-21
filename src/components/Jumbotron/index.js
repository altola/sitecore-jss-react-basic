import React from "react";
import { Jumbotron as ReactstrapJumbotron, Button } from "reactstrap";
import { Text, RichText, Link } from "@sitecore-jss/sitecore-jss-react";
import { NavLink } from "react-router-dom";

const Jumbotron = ({ fields, context }) => {
  const { pageEditing } = context;
  const {
    title,
    subtitle,
    description,
    buttonLink,
    buttonType,
    buttonTitle
  } = fields;
  return (
    <div>
      <ReactstrapJumbotron>
        <Text tag="h1" className="display-3" field={title} />
        <RichText tag="p" className="lead" field={subtitle} />
        <hr className="my-2" />
        <RichText tag="p" field={description} />
        <p className="lead">
          {pageEditing ? (
            <Link
              field={buttonLink}
              className={`btn btn-${buttonType.value}`}
            />
          ) : (
            <NavLink to={buttonLink.value.href} className={`btn btn-${buttonType.value}`}>
              {buttonLink.value.title}
            </NavLink>
          )}
        </p>
      </ReactstrapJumbotron>
    </div>
  );
};

export default Jumbotron;
