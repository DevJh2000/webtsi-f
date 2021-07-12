import React, { Component } from "react";
import { Link } from "react-scroll";
const NewLink = Link;

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="footer-top-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-widget">
                  <a href="/" className="logo">
                    <img src="/images/WebtsiLogo.png" alt="Image" />
                  </a>

                  <p>TSI crecemos junto contigo</p>

                  <ul className="social-icon">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/tsiperueirl"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/faqtureperu/?hl=es"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/channel/UC82-Pi9Q9vXBkbtWacidW_g"
                      >
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://twitter.com/ParaEirl">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    {/* <li>
                      <Link href="/#">
                        <a target="_blank">
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a target="_blank">
                          <i className="bx bxl-pinterest-alt"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a target="_blank">
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a target="_blank">
                          <i className="bx bxl-youtube"></i>
                        </a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-widget">
                  <h3>Secciones</h3>
                  <ul>
                    <li>
                      <NewLink
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="navbar-brand"
                      >
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Acerca de Nosotros
                        </a>
                      </NewLink>
                    </li>
                    <li>
                      <NewLink
                        activeClass="active"
                        to="whych"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="navbar-brand"
                      >
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          ¿Por que Elegirnos?
                        </a>
                      </NewLink>
                    </li>
                    <li>
                      <NewLink
                        activeClass="active"
                        to="serv"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="navbar-brand"
                      >
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Servicios
                        </a>
                      </NewLink>
                    </li>

                    <li>
                      <NewLink
                        activeClass="active"
                        to="ben"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="navbar-brand"
                      >
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Beneficios
                        </a>
                      </NewLink>
                    </li>
                    <li>
                      <NewLink
                        activeClass="active"
                        to="faq"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="navbar-brand"
                      >
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Preguntas
                        </a>
                      </NewLink>
                    </li>
                    <li>
                      <NewLink
                        activeClass="active"
                        to="pri"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="navbar-brand"
                      >
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Precios
                        </a>
                      </NewLink>
                    </li>

                    <li>
                      <NewLink
                        activeClass="active"
                        to="contus"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="navbar-brand"
                      >
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Contactanos
                        </a>
                      </NewLink>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="col-lg-3 col-md-6">
                <div className="single-widget">
                  <h3>Important Links</h3>

                  <ul>
                    <li>
                      <Link href="/#">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Search Engine
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Online Support
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Development
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Pay Per Click
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Support
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Application
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}

              <div className="col-lg-3 col-md-6">
                <div className="single-widget">
                  <h3>Information</h3>

                  <ul className="information">
                    <li className="address">
                      <i className="flaticon-call"></i>
                      <span>Telefono</span>
                      Tel. + (12) 1800-567-8990
                    </li>

                    <li className="address">
                      <i className="flaticon-envelope"></i>
                      <span>E-mail</span>
                      mwleonc@gmail.com
                    </li>

                    <li className="address">
                      <i className="flaticon-maps-and-flags"></i>
                      <span>Direccion</span>
                      jr. Callao por la entrada a recodo por la bajadita del
                      mercado
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-shape">
            <img src="/images/shape/footer-shape-one.png" alt="Image" />
            <img src="/images/shape/footer-shape-two.png" alt="Image" />
          </div>
        </footer>

        {/* Footer Bottom Area   */}
        <footer className="footer-bottom-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="copy-right">
                  <p>Copyright &copy; {currentYear} TSI</p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="privacy">
                  <ul>
                    <li>
                      <Link href="/terms-conditions">
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="designed">
                  <p>
                    Designed By <i className="bx bx-heart"></i>{" "}
                    <a
                      href="https://www.instagram.com/terokas_art/"
                      target="_blank"
                    >
                      Terokas_Art
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
