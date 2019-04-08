import React, { Component } from "react";
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = (movie) => {
    // we are passing the movie name that we clicked. In Movie.js... saveMovie = this.state.movie (clicked movie name)
    let newSavedList = this.state.savedList;
    //the value in this.state.savedList:[] is assigned to newSavedList.
    newSavedList.push(movie);
    //movie name is added to newSavedList
    this.setState({ savedList: newSavedList });
    //value of newSavedList is assigned to this.state.savedList
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route path="/" exact component = {MovieList} /> {/* MovieList component */}
        <Route path="/movies/:id" render = {(props) => {
          return (
            <Movie {...props} addToSavedList = {this.addToSavedList} />
            // ...props = props.match, props.history, props.location
          )
        }} />
      </div>
    );
  }
}
