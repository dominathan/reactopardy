var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');

var Question = React.createClass({
  getInitialState: function() {
    return { showModal: false };
  },

  close: function() {
    this.setState({ showModal: false });
  },

  open: function() {
    this.setState({ showModal: true });
  },

  render: function() {
    return (
      <div>
        <li className="list-group-item"
            key={this.props.id}
            onClick={this.open}>
          <h5>{this.props.amount}</h5>
        </li>
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header>
              <Modal.Title>{this.props.category}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>{this.props.question}</h4>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-lg btn-success" onClick={this.close}>Close</button>
            </Modal.Footer>
          </Modal>
      </div>
    );
  }
});

module.exports = Question
