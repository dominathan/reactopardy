var React = require('react');
var Category = require('../components/Category');
var Score = require('./Score')

var Home = React.createClass({
  getInitialState: function() {
    return {
      pointTotal: 0
    };
  },
  handleScore: function(score) {
    var changedAmount = this.state.pointTotal + score;
    this.setState({
      pointTotal: changedAmount
    });
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">

          <Category changeScore={this.handleScore} />
          <Category changeScore={this.handleScore} />
          <Category changeScore={this.handleScore} />
          <Category changeScore={this.handleScore} />
          <Category changeScore={this.handleScore} />
          <Category changeScore={this.handleScore} />
        </div>
        <div className="row">
          <Score pointTotal={this.state.pointTotal} />
        </div>
      </div>
    )
  }
});

module.exports = Home;
