import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
const SocialsButtons = () => {
  return (
    <>
      <div className="wasa">
        <WhatsAppWidget
          phoneNumber="51937403683"
          message="Hello! 👋🏼 \n\nWhat can we do for you?"
          companyName="WEBTSI"
          sendButton="Send"
        />
      </div>

      <MessengerCustomerChat pageId="114975533587822" appId="222335366276258" />
    </>
  );
};

export default SocialsButtons;
