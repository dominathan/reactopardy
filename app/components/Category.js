var React = require('react');
var QuestionBlock = require('./QuestionBlock');

var Category = React.createClass({
  getInitialState: function() {
    return {
      category: {text: ""},
      questions: []
    }
  },
  componentDidMount: function() {
    $.get('/category', function(result) {
      console.log(result);
      if(this.isMounted()) {
        this.setState({
          category: {text: result.title},
          questions: result.clues
        });
      }
    }.bind(this));
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
