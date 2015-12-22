var React = require('react');
var Router = require('react-router');
var Home = require('../components/Home');
var Navbar = require('../components/Navbar');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;


module.exports = (
  <Route path="/" component={Navbar}>
    <IndexRoute component={Home} />
  </Route>
);
