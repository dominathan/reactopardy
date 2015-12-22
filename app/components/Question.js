var React = require('react');

var Question = React.createClass({

  render: function() {
  console.log(this.props);
    return (
      <h6>{this.props.question.test}</h6>
    )
  }
})

module.exports = Question;
