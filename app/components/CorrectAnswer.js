var React = require('react');

var CorrectAnswer = React.createClass({
  propTypes: {
    answer: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className="col-lg-3 col-md-3 correct-answer">
        <h4>{this.props.answer}</h4>
      </div>
    );
  }
});

module.exports = CorrectAnswer;
