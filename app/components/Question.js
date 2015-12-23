var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Answer = require('./Answer');

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
          <h5>${this.props.amount}</h5>
        </li>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>{this.props.category.toUpperCase()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>{this.props.question}</h1>

          </Modal.Body>
          <Modal.Footer>

            <Answer answer={this.props.answer}/>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = Question
