var React = require('react');

var Navbar = React.createClass({
  render: function() {
    return (
       <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            Reactopardy
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = Navbar;
