import React from "react";
import { Col } from "reactstrap";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

const Column = ({ rendering, params }) => {
  const size = params && params.Size ? parseInt(params.Size) : null;
  console.log({ params });
  console.log({ size });

  return (
    <Col style={{ padding: 30 }} xs={size}>
      <Placeholder name="jss-column" rendering={rendering} />
    </Col>
  );
};

export default Column;
