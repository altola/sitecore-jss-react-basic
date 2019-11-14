import React from "react";
import {
  Text,
  RichText,
  Image,
  Link,
  withSitecoreContext
} from "@sitecore-jss/sitecore-jss-react";
import {
  Card as BootstrapCard,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Card = ({ fields, context }) => {

  if (!fields) {
    return null;
  }

  const { heading, subtitle, text, cta } = fields;
  const imageFieldName = fields["My image"];

  const { pageEditing } = context;

  return (
    <>
      <BootstrapCard>
        {imageFieldName && (
          <Image field={imageFieldName} width="100%" height={null} />
        )}
        <CardBody>
          <CardTitle>
            <Text tag="h1" field={heading}></Text>
          </CardTitle>
          <CardSubtitle>
            <Text field={subtitle} />
          </CardSubtitle>
          <CardText>
            <RichText field={text} />
          </CardText>
          {cta && cta.value && cta.value.href && (
            <SitecoreLink pageEditing={pageEditing} cta={cta} />
          )}
        </CardBody>
      </BootstrapCard>
    </>
  );
};

const SitecoreLink = ({ pageEditing, cta }) => {
  return pageEditing ? (
    <Link field={cta}>
      <Button>{cta.value.text}</Button>
    </Link>
  ) : (
    <NavLink to={cta.value.href}>
      <Button>{cta.value.text}</Button>
    </NavLink>
  );
};

export default withSitecoreContext()(Card);
