import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h5>Correo para contactos:</h5>
                <p>mwleonc@gmail.com</p>
                <p>mwleonc@gmail.com</p>
              </div>
            </div>

            <div className=" col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <h5>Llamenos al:</h5>
                <p>Tel. + (12) 1800-567-8990</p>
                <p>Tel. + (124) 152-567-9874</p>
              </div>
            </div>

            <div className=" col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h5>San Martin - Moyobamba</h5>
                <p>
                  jr. Callao por la entrada a recodo por la bajadita del mercado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
