import React from 'react';
import ReactDom from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { color: props.color }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'aquamarine' }),
    ce(MyTitle, { title: 'Breaking Bad', color: 'orange' }),
    ce(MyTitle, { title: 'Narcos', colors: 'yellow' })
  );
};

ReactDom.render(ce(MyFirstComponent), document.getElementById('app'));
