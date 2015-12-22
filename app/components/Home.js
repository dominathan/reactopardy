var React = require('react');
var Category = require('../components/Category');

var Home = React.createClass({
  render: function() {
    return (
      <h1 className="text-center">
        This...is....Reactopardy
        <Category />
      </h1>
    )
  }
});

module.exports = Home;
