import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './landing';
import Search from './search';

const FourohFour = () => <h1>404</h1>;

const App = () =>
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={FourohFour} />
      </Switch>
    </div>
  </BrowserRouter>;

ReactDom.render(<App />, document.getElementById('app'));
