// @flow
import React from 'react';

const Details = (props) =>
  <div className="details">
    <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
    <h1>Hello there!</h1>
  </div>;

export default Details;
