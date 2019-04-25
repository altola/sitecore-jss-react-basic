import React from "react";
import { Text, RichText, Link } from "@sitecore-jss/sitecore-jss-react";
import { Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";

function Cta(ctaField, pageEditing) {
  return pageEditing ? (
    <Link className="btn btn-primary" field={ctaField} />
  ) : (
    <NavLink to={ctaField.value.href} className="btn btn-primary">
      {ctaField.value.text}
    </NavLink>
  );
}

const MegaHero = ({ fields, context }) => (
  <div>
    <Jumbotron>
      <Text tag="h1" field={fields.heading} className="display-3" />
      <Text tag="p" field={fields.subheading} className="lead" />
      <hr className="my-2" />
      <RichText field={fields.text} />
      <p className="lead">{Cta(fields.cta, context.pageEditing)}</p>
    </Jumbotron>
  </div>
);

export default MegaHero;
