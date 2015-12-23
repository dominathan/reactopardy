var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Question = require('./Question');

var QuestionBlock = React.createClass({
  handleScore: function(amount) {
    this.props.changeScore(amount)
  },
  render: function() {
    var category = this.props.category;
    var self = this;
    var questionList = this.props.questions.slice(0,5).map(function(question,idx) {
      return (
        <Question key={idx}
                  changeScore={self.handleScore}
                  category={category}
                  question={question.question}
                  answer={question.answer}
                  id={question.id}
                  amount={++idx * 200}
        />
      );
    });

    return (
      <ul className="list-group">
        {questionList}
      </ul>
    );
  }
});

module.exports = QuestionBlock;
