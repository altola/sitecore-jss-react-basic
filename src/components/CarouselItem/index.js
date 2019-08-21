import React from "react";
import { Text, Image } from "@sitecore-jss/sitecore-jss-react";
import { CarouselCaption } from "reactstrap";

export default function CarouselItem(props) {
  return (
    <>
      <Image field={props.fields.image} width={800} height={600} />
      <CarouselCaption
        captionText={<Text field={props.fields.subtitle} />}
        captionHeader={<Text field={props.fields.title} />}
      />
    </>
  );
}
