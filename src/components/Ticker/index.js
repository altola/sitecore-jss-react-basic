import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const Ticker = ({ fields }) => {
  const { date, hello, name } = fields;
  return (
    <div style={{ width: 300 }}>
      <Card>
        <CardBody>
          <CardTitle>{hello}</CardTitle>
          <CardSubtitle>{name}</CardSubtitle>
          <CardText>{date}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Ticker;
