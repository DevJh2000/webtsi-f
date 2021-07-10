import React, { Component } from "react";

class WhyChooseUs extends Component {
  render() {
    return (
      <section className="choose-ue-area ptb-100" id="whych">
        <div className="container">
          <div className="section-title">
            <span>¿POR QUÉ ELEGIRNOS?</span>
            <h2>
              Nuestra Plataforma cuenta con más de 200 funcionalidades que te
              harán ahorrar tiempo y vender más
            </h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-content">
                <ul>
                  <li>
                    <span>
                      01 <i className="flaticon-technical-support"></i>
                    </span>
                    <h3>DISEÑO PARA CUALQUIER DISPOSITIVO</h3>
                    <p>
                      Diseño intuitivo, ligero y amigable Mejoras permanentes.
                    </p>
                  </li>
                  <li className="ml">
                    <span>
                      02 <i className="flaticon-shield"></i>
                    </span>
                    <h3>INTEGRACION SUNAT</h3>
                    <p>
                      Nos integramos a SUNAT para la validación de tus
                      comprobantes de pago
                    </p>
                  </li>
                  <li className="ml-25">
                    <span>
                      03 <i className="flaticon-support"></i>
                    </span>
                    <h3>MARCA PERSONALIZADAt</h3>
                    <p>
                      Logo personalizado en el encabezado de los comprobantes.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="choose-content">
                <ul>
                  <li>
                    <span>
                      04 <i className="flaticon-technical-support"></i>
                    </span>
                    <h3>IMPRESION VARIABLES </h3>
                    <p>
                      Opción para imprimir tu comprobante en formato A4 y
                      Ticket.
                    </p>
                  </li>

                  <li className="ml">
                    <span>
                      05 <i className="flaticon-shield"></i>
                    </span>
                    <h3>FLEXIBILIDAD EN EQUIPOS</h3>
                    <p>
                      Nos integramos con lectores de barras para facilitar la
                      identificación de productos Nos integramos con equipos
                      para Punto de venta y POS
                    </p>
                  </li>

                  <li className="ml-25">
                    <span>
                      06 <i className="flaticon-support"></i>
                    </span>
                    <h3>SPORTE ADMINISTRATIVO/TECNICO</h3>
                    <p>
                      Soporte 24/7 Presencial*- Team Viewer/ Anydesk, Llamada o
                      Whatsapp
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
