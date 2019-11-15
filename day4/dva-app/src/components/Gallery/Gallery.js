import { Component as WeElement, createElement as h } from "react";
import { connect } from "react-redux";
export default connect(state => {
  return state;
})(
  class Gallery extends WeElement {
    render() {
      return h(
        "div",
        {
          className: "weui-gallery",
          style: {
            display: this.props.gallery.status ? "block" : "none"
          }
        },
        h("span", {
          className: "weui-gallery__img",
          style: {
            backgroundImage: `url(${this.props.gallery.imgUrl})`
          }
        }),
        h(
          "div",
          {
            onClick: this.hideGallery.bind(this),
            className: "weui-gallery__opr"
          },
          h(
            "a",
            {
              className: "weui-gallery__del"
            },
            h("i", {
              className: "weui-icon-delete weui-icon_gallery-delete"
            })
          )
        )
      );
    }

    constructor(props) {
      super(props);
      this.props = props;
      console.log(this);
    }

    hideGallery() {
      this.props.dispatch({
        type: "SETGALLERY",
        gallery: {
          status: false,
          imgUrl: ""
        }
      });
    }
  }
);
