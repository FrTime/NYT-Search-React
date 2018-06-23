import React from "react";
import SearchForm from "./SearchForm";

const Nav = props => (
  <div>
    <nav className="navbar navbar-dark bg-dark text-white">
      <div className="container">
        <a className="navbar-brand">New York Times Article Search</a>
      </div>
    </nav>
    <br />
    <div className="container">
      <div className="jumbotron">
        <p className="lead">
          Search for articles by topic and year. Search results and your saved
          articles will be displayed below.
        </p>
        <hr className="my-4" />
        <SearchForm
          testFunction={props.testFunction}
          handleInputChange={props.handleInputChange}
        />
      </div>
    </div>
  </div>
);

export default Nav;
