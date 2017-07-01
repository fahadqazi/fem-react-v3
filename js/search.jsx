import React, { Component } from 'react';
import ShowCard from './showCard';
import preload from '../data.json';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'this is some type of bug statement',
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            type="text"
            placeholder="Search"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
          />
        </header>
        <div>
          {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}
export default Search;
