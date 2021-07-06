import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
const SocialsButtons = () => {
  return (
    <section className="wasa pt-100" id="about">
      <div className="container fluid">
        <div className="row align-items-center">
          <div className="col-md-10">
            <WhatsAppWidget phoneNumber="51937403683" />
          </div>
        </div>
      </div>
      <MessengerCustomerChat pageId="114975533587822" appId="222335366276258" />
    </section>
  );
};

export default SocialsButtons;
