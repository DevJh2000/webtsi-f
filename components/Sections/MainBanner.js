import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/actions/listData";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import dynamic from "next/dynamic";
import { apilocalUrl } from "../../config/settings";

const OwlCarousel = dynamic(import("react-owl-carousel3"));
//Definimos opciones para el banner
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
  //Instanciamos el dispacth para ejecutar la consulta
  const dispatch = useDispatch();
  //Traemos los valores almacenados en el store
  const val =
    useSelector((state) => state.listReducer.listDataBanner.data) || [];
  //Estado inicial del banner
  const initialState = {
    display: false,
    panel: true,
  };
  //UseState para actualizar el estado del banner
  const [state, setstate] = useState(initialState);

  //UseState para almacenar la data optenida del store
  const [list, setList] = useState([]);

  //UseEffect para controlar  el numero de veces de la ejecucion de la consulta y cambiar el estado del banner
  useEffect(() => {
    dispatch(getList("/banner/list"));
    setstate({ display: true });
  }, []);

  //UseEffect para controlar el numero de veces de ejecucion de almacenamiento de datos traidos del store
  useEffect(() => {
    setList(val === undefined ? [] : val);
  }, [, val]);

  //Generamos el componente
  return (
    <section className="slider-area">
      {
        //Consultamos el estado y definimos las opcciones  del banner
        state.display ? (
          <OwlCarousel
            className="arduix-slider owl-carousel owl-theme"
            {...options}
          >
            {list.length > 0
              ? //Recorremos la data almacenada traida desde el Store
                list.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="arduix-slider-item"
                      style={{
                        width: "100%",
                        height: "65rem",
                        maxWidth: "100%",
                        maxHeight: "60rem",
                        backgroundImage: `url(${apilocalUrl}${data.imgback})`,
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
                })
              : ""}
          </OwlCarousel>
        ) : (
          ""
        )
      }
    </section>
  );
};
export default MainBanner;
