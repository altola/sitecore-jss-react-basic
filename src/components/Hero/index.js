import React from "react";
import { RichText, Image } from "@sitecore-jss/sitecore-jss-react";

export default function Hero(props) {
  return <div>
    <Image field={props.fields.featuredImage} />
    <RichText className="contentDescription" field={props.fields.content} />
  </div>
};
