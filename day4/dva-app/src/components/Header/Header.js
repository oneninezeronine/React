import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  header {
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 100%;
    background-color: red;
    color: white;
  }
`;

class Header extends WeElement {
  render() {
    return h(StyledComponents, null, h("header", null, "\u5FAE\u4FE1"));
  }
}

export default Header;
