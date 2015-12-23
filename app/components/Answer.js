var React = require('react');
var score = require('string_score')

var Answer = React.createClass({
  propTypes: {
    closeModal: React.PropTypes.func.isRequired,
    answer: React.PropTypes.string.isRequired
  },
  close: function() {
    return this.props.closeModal();
  },
  getAnswer: function(ref) {
    this.answer = ref;
  },
  submitAnswer: function(event) {
    event.preventDefault();
    var playerAnswer = this.answer.value.toLowerCase();
    var realAnswer = this.props.answer.replace(/<([^>]+>)/gi,"").toLowerCase();
    var pointVal = parseInt(this.props.amount);
    this.answer.value = ''
    console.log('Real Answer: ', realAnswer)
    console.log('Player Answer: ', playerAnswer)
    var fuzzyAnswer = realAnswer.score(playerAnswer)
    console.log("score", fuzzyAnswer)
    if(fuzzyAnswer >= 0.60) {
      console.log('CORRECT!!');
      this.props.changeScore(pointVal);
    } else {
      console.log('INCORRECT!!');
      this.props.changeScore(-pointVal);
    }
    this.close();
  },
  render: function() {
    return (
      <form onSubmit={this.submitAnswer}>
        <input type='text' className="form-control" ref={this.getAnswer} placeholder="No 'What is' Needed" autofocus='true' />
        <button type="submit" className="btn btn-lg btn-success" onClick={this.submitAnswer}>Answer</button>
      </form>
    );
  }
});


module.exports = Answer;
