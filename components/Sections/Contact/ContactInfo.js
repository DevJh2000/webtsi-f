import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h5>Correo para contactos:</h5>
                <p>mwleonc@gmail.com - gerencia@tsi.pe</p>
                <p>faqtureserver@gmail.com - ventas@tsi.pe</p>
                <p>support@tsi.pe</p>
              </div>
            </div>

            <div className=" col-lg-4 col-sm-12">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <h5>Llamenos al:</h5>
                <p>Cel. + (51) 998 407 723 </p>
                <p>Cel. + (51) 956 455 974 </p>
                <p>Cel. + (51)978 580 802</p>
              </div>
            </div>

            <div className=" col-lg-4 col-sm-12">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h5>San Martin - Moyobamba</h5>
                <p>jr. Callao N°931</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
