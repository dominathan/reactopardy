var React = require('react');
var Category = require('../components/Category');
var Score = require('./Score');
var CorrectAnswer = require('./CorrectAnswer');

var Home = React.createClass({
  getInitialState: function() {
    return {
      pointTotal: 0,
      answer: "Correct Answer"
    };
  },
  handleScore: function(score) {
    var changedAmount = this.state.pointTotal + score;
    this.setState({
      pointTotal: changedAmount
    });
  },
  handleAnswer: function(answer) {
    this.setState({
      answer: answer
    });
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">

          <Category changeScore={this.handleScore} correctAnswer={this.handleAnswer} />
          <Category changeScore={this.handleScore} correctAnswer={this.handleAnswer} />
          <Category changeScore={this.handleScore} correctAnswer={this.handleAnswer} />
          <Category changeScore={this.handleScore} correctAnswer={this.handleAnswer} />
          <Category changeScore={this.handleScore} correctAnswer={this.handleAnswer} />
          <Category changeScore={this.handleScore} correctAnswer={this.handleAnswer} />
        </div>
        <div className="row">
          <CorrectAnswer answer={this.state.answer} />
          <Score pointTotal={this.state.pointTotal} />
        </div>
      </div>
    )
  }
});

module.exports = Home;
