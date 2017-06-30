import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './landing';
import Search from './search';

const App = () =>
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </div>
  </HashRouter>;

ReactDom.render(<App />, document.getElementById('app'));
