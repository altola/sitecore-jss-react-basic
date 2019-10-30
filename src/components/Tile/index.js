import React from "react";
import { Text, Image, Link } from "@sitecore-jss/sitecore-jss-react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Tile = ({ fields }) => {
  const { title, subtitle, image, link, text } = fields;
  return (
    <div style={{width: 300}}>
      <Card>
        <Image field={image} width={"100%"} height={null} />
        <CardBody>
          <CardTitle>
            <Text field={title} />
          </CardTitle>
          <CardSubtitle>
            <Text field={subtitle} />
          </CardSubtitle>
          <CardText>
            <Text field={text} />
          </CardText>
          <Link className={`btn btn-primary`} field={link} />
        </CardBody>
      </Card>
    </div>
  );
};

export default Tile;
