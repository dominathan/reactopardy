var React = require('react');

var Answer = React.createClass({
  render: function() {
    return (
      <div>
        <input type='text' className="form-control" placeholder="No 'What is' Needed" />
        <button type="submit" className="btn btn-lg btn-success">Answer</button>
      </div>
    );
  }
});


module.exports = Answer;
