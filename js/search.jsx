// @flow
import React, { Component } from 'react';
import ShowCard from './showCard';

class Search extends Component {
  state={
    searchTerm: 'black'
  };
  props: {
    shows: Array<{ title: string, description: string, year: string, imdbID: string, trailer: string, poster: string }>
  };
  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement}) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>Svideo</h1>
          <input
            type="text"
            placeholder="Search"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
          />
        </header>
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.description} ${show.title}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0,
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}
export default Search;
