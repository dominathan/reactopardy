var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-bootstrap/lib/Modal');
var Answer = require('./Answer');

var Question = React.createClass({
  getInitialState: function() {
    return { showModal: false, beenAnswered: false };
  },
  handleScore: function(amount) {
    this.props.changeScore(amount)
  },
  handleAnswer: function(answer) {
    this.props.correctAnswer(answer);
  },
  close: function() {
    this.setState({ showModal: false, beenAnswered: true });
    ReactDOM.findDOMNode(this).children[0].children[0].textContent = ""
  },

  open: function() {
    this.setState({ showModal: true });
  },
  render: function() {
    return (
      <div>
        <li className="list-group-item"
            key={this.props.id}
            onClick={this.state.beenAnswered ? "" : this.open}>
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

            <Answer answer={this.props.answer}
                    closeModal={this.close}
                    amount={this.props.amount}
                    changeScore={this.handleScore}
                    correctAnswer={this.handleAnswer} />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = Question;
