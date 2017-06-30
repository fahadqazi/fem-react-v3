import React from 'react';
import ReactDom from 'react-dom';

const MyTitle = (props) => {
  return(
    <div>
      <h1 style={{color: props.color}}>{props.title}</h1>
    </div>
  )
};

const MyFirstComponent = function() {
  return(
    <div id="my-first-component">
      <MyTitle title="Game of thrones" color="red"/>
      <MyTitle title="Breaking Bad" color="orange"/>
      <MyTitle title="Narcos" color="green"/>
    </div>
  );
};

ReactDom.render(<MyFirstComponent/>, document.getElementById('app'));
