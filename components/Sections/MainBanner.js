import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/actions/listData";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import dynamic from "next/dynamic";
import { apilocalUrl } from "../../config/settings";

const OwlCarousel = dynamic(import("react-owl-carousel3"));

const MainBanner = () => {
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: false,
    items: 1,
    dots: false,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    animateOut: "slideOutDown",
    animateIn: "slideInDown",
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
  };
  const dispatch = useDispatch();
  const val =
    useSelector((state) => state.listReducer.listDataBanner.data) || [];

  const initialState = {
    display: false,
    panel: true,
  };
  const [state, setstate] = useState(initialState);
  const [list, setList] = useState([]);

  useEffect(() => {
    dispatch(getList("/banner/list"));
    setstate({ display: true });
  }, []);

  useEffect(() => {
    setList(val === undefined ? [] : val);
  }, [, val]);

  return (
    <section className="slider-area">
      {state.display ? (
        <OwlCarousel
          className="arduix-slider owl-carousel owl-theme"
          {...options}
        >
          {list.map((data, index) => {
            return (
              <div
                key={index}
                className="arduix-slider-item"
                style={{
                  width: "100%",
                  height: "65rem",
                  maxWidth: "100%",
                  maxHeight: "60rem",
                  backgroundImage: `url(out/${data.imgback})`,
                }}
              >
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="container">
                      <div className="arduix-slider-text overflow-hidden one">
                        <span>{data.textheader}</span>
                        <h1>{data.textbody}</h1>
                        <p>{data.textfooter}</p>

                        <div className="slider-btn">
                          <Link
                            activeClass="active"
                            to="pri"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="default-btn active"
                          >
                            Precios
                          </Link>

                          <Link
                            activeClass="active"
                            to="contus"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="default-btn white"
                          >
                            Contactanos
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      ) : (
        ""
      )}
    </section>
  );
};
export default MainBanner;
