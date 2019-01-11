import React, { Component } from 'react';

class Film extends Component {

  render() {
    return (
      <div className="film">
        <p>Title: {this.props.data.Title}</p>
        <img src={this.props.data.Poster}/>
        <p>ID: {this.props.data.imdbID}</p>
        <p>Year: {this.props.data.Year}</p>
        <p>Runtime: {this.props.data.Runtime}</p>
        <p>Released: {this.props.data.Released}</p>
      </div>
    );
  }
}

export default Film;