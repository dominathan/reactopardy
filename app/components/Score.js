var React = require('react');

var Score = React.createClass({
  propTypes: {
    pointTotal: React.PropTypes.number.isRequired
  },
  render: function() {
    return (
      <div className="col-lg-4 col-lg-offset-2 col-md-4 col-md-offset-2">
        <div className="score">
          <h4>${this.props.pointTotal}</h4>
        </div>
      </div>
    );
  }
});

module.exports = Score;
