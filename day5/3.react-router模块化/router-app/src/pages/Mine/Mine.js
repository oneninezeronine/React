import { Component as WeElement, createElement as h } from "react";
import { Link } from "react-router-dom";

class Mine extends WeElement {
  render() {
    return h(
      "div",
      null,
      "\u6211\u7684\u9875\u9762",
      h(
        "ul",
        null,
        h(
          Link,
          {
            to: "/detail?id=1"
          },
          h("li", null, "1")
        ),
        h(
          Link,
          {
            to: "/detail"
          },
          h("li", null, "2")
        ),
        h(
          Link,
          {
            to: "/detail"
          },
          h("li", null, "3")
        ),
        h(
          Link,
          {
            to: "/detail"
          },
          h("li", null, "4")
        )
      )
    );
  }
}

export default Mine;
