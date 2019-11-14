import { Component as WeElement, createElement as h } from "react";
import Footer from "../../components/Footer/Footer";

class Contact extends WeElement {
  render() {
    return h("div", null, h(Footer, null));
  }
}

export default Contact;
