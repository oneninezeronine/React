import { Component as WeElement, createElement as h } from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Panel from "../../components/Panel/Panel";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";

class Wechat extends WeElement {
  render() {
    return h(
      "div",
      null,
      h(Header, null),
      h(Search, null),
      h(Panel, null),
      h(Footer, null),
      h(Gallery, null)
    );
  }
}

export default Wechat;
