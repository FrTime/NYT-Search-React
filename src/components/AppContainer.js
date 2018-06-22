import React, { Component } from "react";
import Nav from "./Nav";
import ArticleContainer from "./ArticleContainer";

class AppContainer extends Component {

  state = {};

  render() {
    return (
      <div>
        <Nav />
        <ArticleContainer />
      </div>
    );
  }
}

export default AppContainer;
