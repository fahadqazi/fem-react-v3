import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
    <div className="app">
      <div className="landing">
        <h1>svideo</h1>
        <input type="text" placeholder="search"/>
        <a href="">Browse All</a>
      </div>
    </div>
);

ReactDom.render(<App/>, document.getElementById('app'));
