import React, { Component } from "react";
import NewNavbar from "../components/NewLayouts/NewNavbar";
import MainBanner from "../components/Sections/MainBanner";
import AboutUs from "../components/Sections/AboutUs";
import WhyChooseUs from "../components/Sections/WhyChooseUs";
import Services from "../components/Sections/Services";
import Benefist from "../components/Sections/Benefist";
import Faq from "../components/Sections/Faq";
import Pricing from "../components/Sections/Pricing";
import ContactUs from "../components/Sections/ContactUs";
import Footer from "../components/NewLayouts/Footer";
import PaternSlaider from "../components/Sections/PaternSlaider";
import CodeSlider from "../components/Sections/CodeSlider";

import MessengerCustomerChat from "react-messenger-customer-chat";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

class Index extends Component {
  render() {
    return (
      <div id="index">
        <div style={{ position: "fixed" }}>
          <ul>
            <li>
              <MessengerCustomerChat
                pageId="114975533587822"
                appId="222335366276258"
              />
            </li>
            <li>
              <WhatsAppWidget phoneNumber="51937403683" />
            </li>
          </ul>
        </div>
        <NewNavbar />
        <MainBanner />
        <CodeSlider />
        <PaternSlaider />
        <AboutUs />
        <WhyChooseUs />
        <Services />
        <Benefist />
        <Faq />
        <Pricing />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default Index;
