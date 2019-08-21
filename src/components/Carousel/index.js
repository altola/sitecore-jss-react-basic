import React, { Component } from "react";
import {
  Carousel as ReactstarapCarousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

import { withPlaceholder } from "@sitecore-jss/sitecore-jss-react";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.getItems().length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.getItems().length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  getItems() {
    return this.props.slides.filter(e => e.type !== "code");
  }

  render() {
    const { activeIndex } = this.state;
    const slides = this.getItems();
    return (
      <ReactstarapCarousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={this.getItems()}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />

        {slides.map((carousel, index) => (
          <CarouselItem
            key={index}
            onExiting={this.onExiting}
            onExited={this.onExited}
          >
            {carousel}
          </CarouselItem>
        ))}

        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </ReactstarapCarousel>
    );
  }
}

export default withPlaceholder({ placeholder: "jss-carousel", prop: "slides" })(
  Carousel
);
