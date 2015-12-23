var React = require('react');
var Category = require('../components/Category');

var Home = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center">
            This...is....Reactopardy
          </h1>
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    )
  }
});

module.exports = Home;
