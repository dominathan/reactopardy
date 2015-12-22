var React = require('react');

var Question = React.createClass({

  render: function() {
    var questionList = this.props.questions.slice(0,5).map(function(question,idx) {
      return (
        <li className="list-group-item"
            key={question.id}
            data-question={question.question}
            data-answer={question.answer}>
          <h6>{++idx * 100}</h6>
        </li>
      );
    });
    return (
      <ul className="list-group">
        {questionList}
      </ul>
    );
  }
});

module.exports = Question;
