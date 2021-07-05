import "../public/css/bootstrap.min.css";
// import '../public/css/animate.css';
import "animate.css";
import "../public/css/boxicons.min.css";
import "../public/css/flaticon.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../public/css/style.css";
import "../public/css/responsive.css";

import App from "next/app";
import Head from "next/head";
import Loader from "../components/Shared/Loader";

import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import MessengerCustomerChat from "react-messenger-customer-chat";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Jumpx - React Next AI & IT Startup Template</title>
        </Head>
        <Component {...pageProps} />
        {/* Preloader */}
        <Loader loading={this.state.loading} />
        <MessengerCustomerChat
          pageId="114975533587822"
          appId="222335366276258"
        />
        <WhatsAppWidget phoneNumber="51937403683" />
      </Provider>
    );
  }
}
