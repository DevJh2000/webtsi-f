import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

import wasa from "../../public/images/whatsapp.png";
const SocialsButtons = () => {
  return (
    <>
      <a
        href="https://wa.me/937403683?text=Hola%20estoy%20interesado%en%20lo%20que%20ofrecen%20c:"
        target="_blank"
        className="wasa"
      >
        <img src={wasa.src}></img>
      </a>

      <MessengerCustomerChat pageId="114975533587822" appId="222335366276258" />
    </>
  );
};

export default SocialsButtons;
