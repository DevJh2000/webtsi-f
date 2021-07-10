import React, { Component } from "react";
import { Link } from "react-scroll";

class AboutUs extends Component {
  render() {
    return (
      <section className="about-area pt-100" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/images/about-img-three.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>ACERCA DE NOSOTROS</span>
                <h2>
                  Completamos cada proyecto con un cuidado adicional según las
                  necesidades del cliente
                </h2>

                <p>
                  Te ofrecemos los servicios perfectos para gestionar tu empresa
                  de forma intuitiva y simple, apoyándonos en tecnologías de
                  ultima generacion.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        SOPORTE GRATUITO 24/7
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        INTERFAZ INTUITIVA
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        SERVICIO DE POSTVENTA Y ACTUALIZACIONES CONTINUAS
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        ENVIO DE COMPROBANTES AUTOMÁTICO
                      </li>
                    </ul>
                  </div>
                </div>
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
      </section>
    );
  }
}

export default AboutUs;
