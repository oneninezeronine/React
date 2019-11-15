import { Component as WeElement, createElement as h } from "react";
import stores from "../../stores";

class Search extends WeElement {
  render() {
    return h(
      "div",
      {
        className: this.state.isFocus
          ? "weui-search-bar"
          : "weui-search-bar weui-search-bar_focusing",
        id: "searchBar"
      },
      h(
        "form",
        {
          className: "weui-search-bar__form"
        },
        h(
          "div",
          {
            className: "weui-search-bar__box"
          },
          h("i", {
            className: "weui-icon-search"
          }),
          h("input", {
            ref: "input",
            value: this.state.searchText,
            onChange: this.getInputValue.bind(this),
            type: "search",
            className: "weui-search-bar__input",
            id: "searchInput",
            placeholder: "\u641C\u7D22",
            required: true
          }),
          h("a", {
            onClick: this.clear.bind(this),
            className: "weui-icon-clear",
            id: "searchClear"
          })
        ),
        h(
          "label",
          {
            onClick: this.toggle.bind(this),
            className: "weui-search-bar__label",
            id: "searchText",
            style: {
              transformOrigin: "0px 0px",
              opacity: 1,
              transform: "scale(1, 1)"
            }
          },
          h("i", {
            className: "weui-icon-search"
          }),
          h("span", null, "\u641C\u7D22")
        )
      ),
      h(
        "a",
        {
          onClick: this.toggle.bind(this),
          className: "weui-search-bar__cancel-btn",
          id: "searchCancel"
        },
        "\u53D6\u6D88"
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      isFocus: true,
      searchText: ""
    };
  }

  toggle() {
    this.setState({
      isFocus: !this.state.isFocus
    });
    this.refs.input.focus();
  }

  getInputValue(event) {
    stores.dispatch({
      type: "SETSEARCHTEXT",
      searchText: event.target.value
    });
    this.setState({
      searchText: event.target.value
    });
  }

  clear() {
    console.log(this);
    this.setState({
      searchText: ""
    });
    this.refs.input.focus();
  }
}

export default Search;
