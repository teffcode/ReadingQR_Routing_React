import React, { Component } from 'react';
import Question from '../components/Question';
import questions from '../../../data/questions';

class QuestionsPage extends Component {
  constructor() {
    super();
    this.intervalStartQuestionId = null;
    this.intervalFinishQuestionId = null;
    this.state = {
      questions,
      currentQuestion: 0,
      questionFinished: false,
      questionStarted: false,
      finishCounter: 10,
      startCounter: 3
    };
  }

  nextQuestion = () => {
    this.setState({
      questionStarted: false,
      questionFinished: false,
      currentQuestion: this.state.currentQuestion + 1
    });

    this.startQuestionWithInterval();
  };

  startQuestion = () => {
    const { startCounter } = this.state;

    if (startCounter <= 0) {
      this.setState({ questionStarted: true, startCounter: 3 });
      clearInterval(this.intervalStartQuestionId);
      this.intervalFinishQuestionId = setInterval(this.finishQuestion, 1000);
    } else {
      this.setState({ startCounter: startCounter - 1 });
    }
  };

  finishQuestion = () => {
    const { finishCounter } = this.state;

    if (finishCounter <= 0) {
      this.setState({ questionFinished: true, finishCounter: 10 });
      clearInterval(this.intervalFinishQuestionId);
    } else {
      this.setState({ finishCounter: finishCounter - 1 });
    }
  };

  startQuestionWithInterval() {
    this.intervalStartQuestionId = setInterval(this.startQuestion, 1000);
  }

  componentDidMount() {
    this.startQuestionWithInterval();
  }

  render() {
    const {
      questions,
      startCounter,
      questionFinished,
      finishCounter,
      questionStarted,
      currentQuestion
    } = this.state;

    return questionStarted
      ? <div>
          <span>
            {finishCounter}
          </span>
          <Question
            isFinished={questionFinished}
            questions={questions[currentQuestion]}
            nextQuestion={this.nextQuestion}
          />
        </div>
      : <span>
          {startCounter}
        </span>;
  }
}

export default QuestionsPage;
