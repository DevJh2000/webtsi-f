import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import "react-whatsapp-widget/dist/index.css";

import wasa from "../../public/images/whatsapp.png";
const SocialsButtons = () => {
  const mesa = {
    res: "wa.me/51998407723",
    text: {
      ti: "Hola estoy interesado en sus servicios",
    },
  };
  return (
    <>
      <a
        href={`https://${mesa.res}?text=${mesa.text.ti}`}
        target="_blank"
        className="wasa"
      >
        <img src={wasa.src}></img>
      </a>

      <MessengerCustomerChat pageId="235782320426554" appId="222335366276258" />
    </>
  );
};

export default SocialsButtons;
