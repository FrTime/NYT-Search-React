import React from "react";

const styles = {
  imgStyle: {
    height: "150px",
    width: "150px"
  }
};

const SearchForm = props => (
  <form className="container">
    <div className="form-group">
      <label for="formGroupExampleInput">Search Topic</label>
      <input type="text" className="form-control" id="formGroupExampleInput" placeholder='"Florida Man"' required />
    </div>
    <div className="form-group">
      <label for="formGroupExampleInput2">Start Year (Article Range)</label>
      <input type="number" className="form-control" min="1900" max="2099" step="1" placeholder="2000" required />
    </div>
    <div className="form-group">
      <label for="formGroupExampleInput2">End Year (Article Range)</label>
      <input type="number" className="form-control" min="1900" max="2099" step="1" placeholder="2018" required />
    </div>
    <button class="btn btn-primary" type="submit">Find</button>
  </form>
);

export default SearchForm;
