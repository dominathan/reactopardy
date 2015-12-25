var React = require('react');
var QuestionBlock = require('./QuestionBlock');

var Category = React.createClass({
  getInitialState: function() {
    return {
      category: {text: "Test Category"},
      questions: [{id: 1, question: "A Test Question", answer: "A Test Answer"},
                  {id: 2, question: "A Test Question 2", answer: "A Test Answer 2"},
                  {id: 3, question: "A Test Question 3", answer: "A Test Answer 3"},
                  {id: 4, question: "A Test Question 4", answer: "A Test Answer 4"},
                  {id: 5, question: "A Test Question 5", answer: "A Test Answer 5"}]
    }
  },
  handleScore: function(amount) {
    this.props.changeScore(amount)
  },
  handleAnswer: function(answer) {
    this.props.correctAnswer(answer);
  },
  componentDidMount: function() {
    $.get('/category', function(result) {
      var randomStart,
          clues;
      if(result.clues_count > 5) {
        randomStart = (Math.ceil(Math.random() * (result.clues_count/5))) * 5;
        randomStart = randomStart - 5;
        clues = result.clues.slice(randomStart,randomStart+5);
      } else {
        clues = result.clues;
      };
      if(this.isMounted()) {
        this.setState({
          category: {text: result.title},
          questions: clues
        });
      }
    }.bind(this));
  },
  render: function() {
    return (
      <div className='col-md-2 col-lg-2 col-sm-2'>
        <div className="category">
          <h4>{this.state.category.text.toUpperCase()}</h4>
        </div>
        <QuestionBlock category={this.state.category.text}
                       questions={this.state.questions}
                       changeScore={this.handleScore}
                       correctAnswer={this.handleAnswer} />
      </div>
    );
  }
});

module.exports = Category;
