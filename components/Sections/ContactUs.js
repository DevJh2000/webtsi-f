import React, { Component } from "react";
import ContactInfo from "./Contact/ContactInfo";
import ContactForm from "./Contact/ContactForm";

class ContactUs extends Component {
  render() {
    return (
      <section className="offer-area pt-100 pb-70" id="contus">
        <div className="container">
          <div className="section-title">
            <span>CONTACTANOS</span>
            <h2>Contacte con nosotros</h2>
          </div>
          <div className="row align-items-center">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
