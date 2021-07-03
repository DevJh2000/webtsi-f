import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const CodeSlider = () => {
  const options = {
    loop: true,
    nav: false,
    autoplay: true,
    //   autoplayHoverPause: true,
    mouseDrag: true,
    margin: 0,
    center: true,
    dots: false,
    slidetransition: "linear",
    //   autoplayTimeout: 1000,
    //   autoplayHoverPause: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 4,
      },
      576: {
        items: 4,
      },
      768: {
        items: 4,
      },
    },
  };

  const style = {
    filter: "hue-rotate(330deg)",
    opacity: "50%",
  };

  const [state, setstate] = useState({
    display: false,
  });

  useEffect(() => {
    setstate({
      display: true,
    });
  }, []);

  return (
    <div className="brand-area-two ptb-100">
      <div className="container">
        {state.display ? (
          <OwlCarousel
            className="brand-wrap owl-carousel owl-theme"
            {...options}
          >
            <div className="single-brand">
              <a target="_blank" className="imgPng">
                <img
                  style={style}
                  src="/images/codeicons/vuejs.png"
                  alt="Image"
                />
              </a>
            </div>

            <div className="single-brand">
              <a target="_blank" className="imgPng">
                <img
                  style={style}
                  src="/images/codeIcons/react.png"
                  alt="Image"
                />
              </a>
            </div>

            <div className="single-brand">
              <a target="_blank" className="imgPng">
                <img
                  style={style}
                  src="/images/codeicons/python.png"
                  alt="Image"
                />
              </a>
            </div>

            <div className="single-brand">
              <a target="_blank" className="imgPng">
                <img
                  style={style}
                  src="/images/codeicons/postgresql.png"
                  alt="Image"
                />
              </a>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CodeSlider;
