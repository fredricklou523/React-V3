import React, { Component } from "react";
import ShowCard from "./ShowCard";
import Header from "./Header";

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

  //componentWillMount -> right before react renders out to DOM, about to bemounted to DOM.  Useful if you have something that needs to happen server side and client side (server side rendering)
  //this is actually a REACT event for speed

  //AJAX and gives scope to window/document -> if you integrate with another library put in here (D3) or event listeners on the window
  componentDidMount() {}

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <Header
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
        />
        <div>
          {this.props.shows
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
