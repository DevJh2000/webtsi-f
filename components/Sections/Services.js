import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <section className="offer-area pt-100 pb-70" id="serv">
        <div className="container">
          <div className="section-title">
            <span>Servicios</span>
            <h2>Nuestros Servicios Profesionales para Usted</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-offer serviceDetail">
                <i className="flaticon-chip"></i>
                <h3>
                  <a>Sistema para la Gestión Comercial</a>
                </h3>
                <p>
                  Tiendas de Ropa, Zapaterías, Ferreterías, Farmacias/Boticas,
                  Plastiquerías Minimarkets, Supermarkets, Librerías, Tiendas de
                  Electrónica e Informática Empresas Mayoristas distribuidoras,
                  entre otros.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer serviceDetail">
                <i className="flaticon-vr"></i>
                <h3>
                  <a>Sistema de Gestión Restobar</a>
                </h3>
                <p>
                  Cafeterías, Heladerías, Restaurantes, Fast, Food, Licorerías,
                  Juguerías, Pastelerías, entre otros.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer serviceDetail">
                <i className="flaticon-blockchain"></i>
                <h3>
                  <a>Sistema de Gestión de Transportes</a>
                </h3>
                <p>
                  Empresas de transporte de Pasajeros, de transporte de Carga,
                  empresas de transporte fluvial
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer serviceDetail">
                <i className="flaticon-target"></i>
                <h3>
                  <a> Sistema para Laboratorios Clínicos</a>
                </h3>
                <p>
                  Laboratorios Clínicos que necesitan llevar el control de sus
                  convenios(Entidades o médicos), Laboratorios clínicos que
                  necesitan brindar reportes exactos a sus clientes
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer serviceDetail">
                <i className="flaticon-choice"></i>
                <h3>
                  <a>Sistema para Empresas de Servicios</a>
                </h3>
                <p>
                  Empresas Constructoras, Empresas que brindan Crédito, Empresas
                  Contables que desean llevar control de Caja entre otros
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer serviceDetail">
                <i className="flaticon-deep-learning"></i>
                <h3>
                  <a> Sistema Gestión Hotelera</a>
                </h3>
                <p>
                  Empresas Hoteleras, Hostales, Hospedajes, Bungalows entre
                  otros.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <img src="/images/shape/services-shape/1.png" alt="Image" />
          <img src="/images/shape/services-shape/2.png" alt="Image" />
          <img src="/images/shape/services-shape/3.png" alt="Image" />
          <img src="/images/shape/services-shape/4.png" alt="Image" />
          <img src="/images/shape/services-shape/5.png" alt="Image" />
          <img src="/images/shape/services-shape/6.png" alt="Image" />
        </div>
      </section>
    );
  }
}

export default Services;
