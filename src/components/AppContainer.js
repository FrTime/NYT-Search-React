import React, { Component } from "react";
import Nav from "./Nav";
import ArticleContainer from "./ArticleContainer";
import API from "./../API";

class AppContainer extends Component {
  state = {
    query: "",
    yearStart: "",
    yearEnd: "",
    results: [],
    savedArticles: []
  };

  componentDidMount() {
    console.log("Mounted");
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    console.log("getting articles");
    API.getArticles()
      .then(res => {
        const savedArticles = res.data;
        this.setState({ savedArticles });
        console.log(savedArticles);
      })
      .catch(err => console.log(err));
  };

  saveArticle = event => {
    const title = event.target.articleName;
    const date = event.target.articleDate;
    const url = event.target.articleURL;
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  testFunction = event => {
    event.preventDefault();
    console.log("clickity wickity");
    if (this.state.query && this.state.yearStart && this.state.yearEnd) {
      this.getAPI(this.state.query, this.state.yearStart, this.state.yearEnd);
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  getAPI = (query, yearStart, yearEnd) => {
    API.search(query, yearStart, yearEnd)
      .then(res => {
        const results = res.data.response.docs;
        this.setState({ results });
        console.log(results);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav
          testFunction={this.testFunction}
          handleInputChange={this.handleInputChange}
        />
        <ArticleContainer
          articles={this.state.results}
          saveArticle={this.saveArticle}
          savedArticles={this.state.savedArticles}
        />
      </div>
    );
  }
}

export default AppContainer;
