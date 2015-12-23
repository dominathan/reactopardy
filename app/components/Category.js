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
  componentDidMount: function() {
    // $.get('/category', function(result) {
    //   if(this.isMounted()) {
    //     this.setState({
    //       category: {text: result.title},
    //       questions: result.clues
    //     });
    //   }
    // }.bind(this));
  },
  render: function() {
    return (
      <div className='col-md-2 col-lg-2'>
        <h4>{this.state.category.text}</h4>
        <QuestionBlock category={this.state.category.text} questions={this.state.questions} />
      </div>
    );
  }
});

module.exports = Category;
