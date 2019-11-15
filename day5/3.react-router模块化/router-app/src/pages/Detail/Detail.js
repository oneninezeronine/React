import { Component as WeElement, createElement as h } from "react";
import { useParams, withRouter } from "react-router-dom";
export default withRouter(
  class Detail extends WeElement {
    render() {
      return h(
        "div",
        null,
        "\u8BE6\u60C5\u9875",
        h(
          "button",
          {
            onClick: this.toHomePage.bind(this)
          },
          "\u7F16\u7A0B\u5F0F\u5BFC\u822A"
        )
      );
    }

    constructor(props) {
      super(props);
    }

    toHomePage() {
      this.props.history.push("/home");
    }

    componentDidMount() {
      console.log(this);
    }
  }
);
