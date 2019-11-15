import { Component as WeElement, createElement as h } from "react";
import { Link } from "react-router-dom";

class Home extends WeElement {
  render() {
    return h(
      "div",
      null,
      "Home\u9875\u9762",
      h(
        Link,
        {
          to: "/home/a"
        },
        "\u4E00"
      ),
      h(
        Link,
        {
          to: "/home/b"
        },
        "\u4E8C"
      )
    );
  }
}

export default Home;
