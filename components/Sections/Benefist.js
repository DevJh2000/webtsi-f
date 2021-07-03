import React from "react";

const Benefist = () => {
  return (
    <section className="business-area ptb-100" id="ben">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="business-content">
              <h2>BENEFICIOS</h2>
            </div>

            <div className="single-business">
              <i className="flaticon-chip"></i>
              <h3>Haga que su negocio sea más competitivo y duradero</h3>
              <p>
                Opte por facturación electrónica, ahorre tiempo y dinero,
                gestione mejor a sus clientes y proveedores.
              </p>
            </div>

            <div className="single-business">
              <i className="flaticon-blockchain"></i>
              <h3>Una Empresa con una Misión única</h3>
              <p>
                Ayudamos a que usted como empresario crezca, brindandole una
                solución inteligente hecha a medida del empresario Peruano.
              </p>
            </div>

            <div className="business-btn">
              <a className="default-btn">Know Details</a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-sm-6 counter-nth">
                <div className="single-counter">
                  <h2>
                    <span className="target">95%</span>
                  </h2>
                  <p>Project Completed</p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 counter-nth">
                <div className="single-counter">
                  <h2>
                    <span className="target">90%</span>
                  </h2>
                  <p>Design</p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 counter-nth">
                <div className="single-counter">
                  <h2>
                    <span className="target">85%</span>
                  </h2>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 counter-nth">
                <div className="single-counter">
                  <h2>
                    <span className="target">80</span>
                  </h2>
                  <p>Award Win</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefist;
