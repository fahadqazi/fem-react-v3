import React from 'react';
import ShowCard from './showCard';
import preload from '../data.json';

const Search = () =>
  <div className="search">
    {preload.shows.map(show =>
      <ShowCard show={show}/>
    )}
  </div>;

export default Search;
