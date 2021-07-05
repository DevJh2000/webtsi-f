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
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
class Index extends Component {
  render() {
    return (
      <>
        <div
          style={{
            position: "fixed",
            width: "60px",
            height: "60px",
            bottom: "40px",
            right: "40px",
            backgroundColor: "#25d366",
            color: "#FFF",
            borderRadius: "50px",
            textAlign: "center",
            fontSize: "30px",
            boxShadow: "2px 2px 3px #999",
            zIndex: "100",
          }}
        >
          <WhatsAppWidget phoneNumber="51937403683" />
        </div>
        <div id="index">
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
      </>
    );
  }
}

export default Index;
