import React, { Component } from "react";
import { Link } from "react-scroll";
import LinkNavbar from "../Butoms/LinkNavbar";

const NewLink = Link;

//Definicion de del Nuevo navbar
class NewNavbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area fixed-top">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <NewLink
                activeClass="active"
                to="index"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar-brand"
              >
                <img
                  className="imgPngLOGO"
                  src="/images/WebtsiLogo.png"
                  alt="logo"
                />
              </NewLink>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>
              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <NewLink
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="navbar-brand"
                    >
                      ACERCA DE NOSOTROS
                    </NewLink>
                  </li>
                  <li className="nav-item">
                    <NewLink
                      activeClass="active"
                      to="whych"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="navbar-brand"
                    >
                      ¿POR QUÉ ELEGIRNOS?
                    </NewLink>
                  </li>
                  <li className="nav-item">
                    <NewLink
                      activeClass="active"
                      to="serv"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="navbar-brand"
                    >
                      SERVICIOS
                    </NewLink>
                  </li>

                  <li className="nav-item">
                    <NewLink
                      activeClass="active"
                      to="ben"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="navbar-brand"
                    >
                      BENEFICIOS
                    </NewLink>
                  </li>
                  <li className="nav-item">
                    <NewLink
                      activeClass="active"
                      to="faq"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="navbar-brand"
                    >
                      PREGUNTAS
                    </NewLink>
                  </li>
                  <li className="nav-item">
                    <NewLink
                      activeClass="active"
                      to="pri"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="navbar-brand"
                    >
                      Precios
                    </NewLink>
                  </li>

                  <li className="nav-item">
                    <NewLink
                      activeClass="active"
                      to="contus"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="navbar-brand"
                    >
                      Contactanos
                    </NewLink>
                  </li>
                </ul>
                <LinkNavbar />
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
export default NewNavbar;
