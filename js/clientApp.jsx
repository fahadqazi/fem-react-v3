const ce = React.createElement

const MyTitle = function(props){
  return(
    ce('div', null,
      ce('h1', { color: props.color }, props.title)
    )
  )
}

const MyFirstComponent = function(){
  return(
    ce('div', {id: 'my-first-component'},
      ce(MyTitle, {title: 'game of thrones', color:'aquamarine'}),
      ce(MyTitle, {title: 'breaking bad', color: 'orange'}),
      ce(MyTitle, {title: 'narcos', colors: 'yellow'})
    )
  )
}

ReactDom.render(
  ce(MyFirstComponent),
  document.getElementById('app')
)
