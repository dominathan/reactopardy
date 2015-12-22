var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes')

// var Main = React.createClass({
//   render: function() {
//     return (
//       <h1> HELLO WORLD </h1>
//     )
//   }
// });

// ReactDOM.render(<Main />, document.getElementById('app'));

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
)
