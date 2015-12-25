var React = require('react');
var score = require('string_score');
var ReactDOM = require('react-dom');

var Answer = React.createClass({
  getInitialState: function() {
    return {
      loading: false
    }
  },
  propTypes: {
    closeModal: React.PropTypes.func.isRequired,
    answer: React.PropTypes.string.isRequired
  },
  close: function(event) {
    event.preventDefault();
    var realAnswer = this.props.answer.replace(/<([^>]+>)/gi,"")
                                      .replace(/\(|\)/gi,"")
                                      .replace(/^(the|a|an|a)\s?/gi,"")
                                      .replace(/"/g,"")
                                      .toLowerCase();
    this.props.correctAnswer(realAnswer);
    this.props.closeModal();
  },
  getAnswer: function(ref) {
    this.answer = ref;
  },
  componentDidMount: function() {
    ReactDOM.findDOMNode(this).children[0].focus();
  },
  submitAnswer: function(event) {
    event.preventDefault();
    var playerAnswer = this.answer.value.toLowerCase();
    var realAnswer = this.props.answer.replace(/<([^>]+>)/gi,"").toLowerCase();
    var pointVal = parseInt(this.props.amount);
    this.answer.value = ''
    console.log('Real Answer: ', realAnswer)
    console.log('Player Answer: ', playerAnswer)
    var fuzzyAnswer = realAnswer.score(playerAnswer)
    console.log("score", fuzzyAnswer)
    if(fuzzyAnswer >= 0.60) {
      console.log('CORRECT!!');
      this.props.changeScore(pointVal);
    } else {
      console.log('INCORRECT!!');
      this.props.changeScore(-pointVal);
    }
    this.close();
  },
  speechRecognition: function() {
    var defer = $.Deferred();
    this.setState({
      loading: true
    });
    console.log('defer', defer);
    var SpeechRecognition = SpeechRecognition ||
                            webkitSpeechRecognition ||
                            mozSpeechRecognition ||
                            msSpeechRecognition ||
                            oSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = function(event) {
      defer.resolve(event.results[0][0].transcript);
    }
    recognition.start();
    return defer;
  },
  checkSpeech: function(event) {
    event.preventDefault();
    var self = this;
    this.speechRecognition().then(function(data){
      self.setState({
        loading: false
      });
      var playerAnswer = data.replace(/^what\sis\s|^who\sis\s|^what\sare\s|^who\sare\s/gi,"")
                             .replace(/^(the|an|a)\s?/gi,"")
                             .replace(/^\s+/gi,"")
                             .toLowerCase();
      var realAnswer = self.props.answer.replace(/<([^>]+>)/gi,"")
                                        .replace(/\(|\)/gi,"")
                                        .replace(/^(the|an|a)\s?/gi,"")
                                        .replace(/"/g,"")
                                        .toLowerCase();
      var pointVal = parseInt(self.props.amount);
      console.log('Real Answer: ', realAnswer)
      console.log('Player Answer: ', playerAnswer)
      var fuzzyAnswer = realAnswer.score(playerAnswer)
      self.props.correctAnswer(realAnswer);
      console.log("score", fuzzyAnswer)
      if(fuzzyAnswer >= 0.60) {
        console.log('CORRECT!!');
        self.props.changeScore(pointVal);
      } else {
        console.log('INCORRECT!!');
        self.props.changeScore(-pointVal);
      }
    }).then(function() {
      self.close(event);
    });
  },
  render: function() {
    var styles = {
      display: 'none'
    };
    return (
      <form>
      <div style={(this.state.loading) ? {} : styles} className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
        <button type="submit" className="btn btn-lg btn-success" onClick={this.checkSpeech}>Speak Answer</button>
        <button type="submit" className="btn btn-lg btn-danger" onClick={this.close}>Pass</button>
      </form>
    );
  }
});


module.exports = Answer;
