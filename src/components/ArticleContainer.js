import React from "react";
import Articles from "./Articles";
import SavedArticles from "./SavedArticles";


const ArticleContainer = props => (
    <div className="container">
        <div className="jumbotron">
            <h3>Search Results</h3>
            <hr className="my-4" />
            <div className="row">
                <div className="col">
                    <Articles />
                </div>
            </div>
        </div>
        <div className="jumbotron">
            <h3>Saved Articles</h3>
            <hr className="my-4" />
            <div className="row">
                <div className="col">
                    <SavedArticles />
                </div>
            </div>
        </div>
    </div>
)

export default ArticleContainer