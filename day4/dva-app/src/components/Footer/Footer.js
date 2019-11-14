import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
import iconTabbar from "../../assets/icon_tabbar.png";
import { Link } from "dva/router";
const StyledComponents = styled.div`
  .weui-tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

class Footer extends WeElement {
  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        {
          className: "weui-tabbar"
        },
        h(
          Link,
          {
            to: "/wechat",
            className: "weui-tabbar__item weui-bar__item_on"
          },
          h(
            "span",
            {
              style: {
                display: "inline-block",
                position: "relative"
              }
            },
            h("img", {
              src: iconTabbar,
              alt: "",
              className: "weui-tabbar__icon"
            }),
            h(
              "span",
              {
                className: "weui-badge",
                style: {
                  position: "absolute",
                  top: "-2px",
                  right: "-13px"
                }
              },
              "8"
            )
          ),
          h(
            "p",
            {
              className: "weui-tabbar__label"
            },
            "\u5FAE\u4FE1"
          )
        ),
        h(
          Link,
          {
            to: "/contact",
            className: "weui-tabbar__item"
          },
          h("img", {
            src: iconTabbar,
            alt: "",
            className: "weui-tabbar__icon"
          }),
          h(
            "p",
            {
              className: "weui-tabbar__label"
            },
            "\u901A\u8BAF\u5F55"
          )
        ),
        h(
          "a",
          {
            className: "weui-tabbar__item"
          },
          h(
            "span",
            {
              style: {
                display: "inline-block",
                position: "relative"
              }
            },
            h("img", {
              src: iconTabbar,
              alt: "",
              className: "weui-tabbar__icon"
            }),
            h("span", {
              className: "weui-badge weui-badge_dot",
              style: {
                position: "absolute",
                top: 0,
                right: "-6px"
              }
            })
          ),
          h(
            "p",
            {
              className: "weui-tabbar__label"
            },
            "\u53D1\u73B0"
          )
        ),
        h(
          "a",
          {
            className: "weui-tabbar__item"
          },
          h("img", {
            src: iconTabbar,
            alt: "",
            className: "weui-tabbar__icon"
          }),
          h(
            "p",
            {
              className: "weui-tabbar__label"
            },
            "\u6211"
          )
        )
      )
    );
  }
}

export default Footer;
