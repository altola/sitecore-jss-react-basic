import React from "react";
import { Text, RichText, Link, Image } from "@sitecore-jss/sitecore-jss-react";
import { NavLink } from "react-router-dom";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

function Cta(ctaField, pageEditing) {
  return pageEditing ? (
    <Link className="btn btn-secondary" field={ctaField} />
  ) : (
    <NavLink to={ctaField.value.href} className="btn btn-primary">
      {ctaField.value.text}
    </NavLink>
  );
}

const Tile = ({ fields, context }) => (
  <div>
    <Card>
      <CardBody>
        <CardTitle>
          <Text field={fields.title} />
        </CardTitle>
        <CardSubtitle>
          <Text field={fields.subtitle} />
        </CardSubtitle>
      </CardBody>
      <Image field={fields.image} width="100%" />
      <CardBody>
        <CardText>
          <RichText field={fields.text} />
        </CardText>
        {Cta(fields.link, context.pageEditing)}
      </CardBody>
    </Card>
  </div>
);

export default Tile;
