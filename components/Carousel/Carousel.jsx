import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bool, arrayOf, node, string, func, object } from "prop-types";
import "./Carousel.css";
import classnames from "classnames";
import isEqual from "lodash/isEqual";

const CarouselArrow = ({ className, style, onClick, darkMode, type }) => {
  return (
    <div
      className={classnames(`${className} CarouselArrow`, {
        "CarouselArrow--darkMode": darkMode,
        "CarouselArrow--prev": isEqual(type, "PREV"),
        "CarouselArrow--next": isEqual(type, "NEXT"),
      })}
      style={{
        ...style,
        zIndex: "1",
        ...(isEqual(type, "PREV") && { left: "50px" }),
        ...(isEqual(type, "NEXT") && { right: "100px" }),
      }}
      onClick={onClick}
    />
  );
};

CarouselArrow.propTypes = {
  type: string.isRequired,
  darkMode: bool,
  className: string,
  style: object,
  onClick: func,
};

const Carousel = ({ darkMode, slides }) => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CarouselArrow darkMode={darkMode} type="PREV" />,
    nextArrow: <CarouselArrow darkMode={darkMode} type="NEXT" />,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="Carousel">
      <div className="Carousel__container">
        <Slider {...settings}>{slides}</Slider>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slides: arrayOf(node).isRequired,
  darkMode: bool,
};

export default Carousel;
