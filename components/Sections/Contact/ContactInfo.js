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
                <h5>Email Us:</h5>
                <p>hello@jumpx.com</p>
                <p>info@jumpx.com</p>
              </div>
            </div>

            <div className=" col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <h5>Call Us:</h5>
                <p>Tel. + (12) 1800-567-8990</p>
                <p>Tel. + (124) 152-567-9874</p>
              </div>
            </div>

            <div className=" col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h5>London</h5>
                <p>123, Western Road, Melbourne Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
