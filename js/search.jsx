import React from 'react';
import ShowCard from './showCard';
import preload from '../data.json';

const Search = () =>
  <div className="search">
    {preload.shows.map(show =>
      <ShowCard key={show.imdbID} {...show}/>
    )}
  </div>;

export default Search;
