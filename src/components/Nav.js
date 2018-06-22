import React from "react";
import SearchForm from "./SearchForm";

const Nav = props => (
  <div className="container">
    <div className="jumbotron">
      <h1 className="display-4">New York Times Search</h1>
      <p className="lead">Search for articles by topic and year.  Search results and your saved articles will be displayed below.</p>
      <hr className="my-4" />
      <SearchForm />
    </div>
  </div>
);

export default Nav;
