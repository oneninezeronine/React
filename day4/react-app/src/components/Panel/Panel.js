import { Component as WeElement, createElement as h } from "react";
import axios from "axios";

class Panel extends WeElement {
  render() {
    return h(
      "div",
      {
        className: "weui-panel weui-panel_access"
      },
      h(
        "div",
        {
          className: "weui-panel__hd"
        },
        "\u56FE\u6587\u7EC4\u5408\u5217\u8868"
      ),
      h(
        "div",
        {
          className: "weui-panel__bd"
        },
        this.renderNews(this.state.news)
      ),
      h(
        "div",
        {
          className: "weui-panel__ft"
        },
        h(
          "a",
          {
            className: "weui-cell weui-cell_access weui-cell_link"
          },
          h(
            "div",
            {
              className: "weui-cell__bd"
            },
            "\u67E5\u770B\u66F4\u591A"
          ),
          h("span", {
            className: "weui-cell__ft"
          })
        )
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
    axios.get("https://cnodejs.org/api/v1/topics").then(data => {
      this.setState({
        news: data.data.data
      });
    });
  }

  renderNews(news) {
    let arr = news.map((item, index) => {
      return h(
        "a",
        {
          key: index,
          className: "weui-media-box weui-media-box_appmsg"
        },
        h(
          "div",
          {
            className: "weui-media-box__hd"
          },
          h("img", {
            className: "weui-media-box__thumb",
            src: item.author.avatar_url,
            alt: ""
          })
        ),
        h(
          "div",
          {
            className: "weui-media-box__bd"
          },
          h(
            "h4",
            {
              className: "weui-media-box__title"
            },
            item.title
          ),
          h(
            "p",
            {
              className: "weui-media-box__desc"
            },
            item.author.loginname
          )
        )
      );
    });
    return arr;
  }
}

export default Panel;
