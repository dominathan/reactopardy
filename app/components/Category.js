var React = require('react');
var Question = require('./Question');

var Category = React.createClass({
  getInitialState: function() {
    return {
      question1: {test: "Hello"},
      question2: {test: "NOOOO"},
      question3: {test: "What about me"},
      question4: {test: "What about and me"},
      question5: {test: "What abou and me and me"}
    }
  },
  render: function() {
    return (
      <div className='col-md-2 col-lg-2'>
        <h4>Category Name</h4>
        <Question question={this.state.question1} />
        <Question question={this.state.question2} />
        <Question question={this.state.question3} />
        <Question question={this.state.question4} />
        <Question question={this.state.question5} />
      </div>
    )
  }
});

module.exports = Category;
