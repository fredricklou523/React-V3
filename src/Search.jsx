import React, { Component } from "react";
import ShowCard from "./ShowCard";
import preload from "../data.json";

class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchTerm: ""
  //   };
  //   // this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  //   // dont' need this because using arrow function in handle search, doesn't create new context
  // }

  //new propsals in JS that allow us to add properties directly to the class (Stage 2)
  //"plugins": ["babel-plugin-transform-class-properties"]
  state = {
    searchTerm: ""
  };

  //this is actually a REACT event for speed
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
              //returns the index fo the match,so if exists will return something greather than 1
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;

//<pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
