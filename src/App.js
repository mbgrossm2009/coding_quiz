import React from "react";
import Question from "./Components/Question";
import Quiz from "./Components/Quiz";
import quizQuestions from "./Api/quizQuestions";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: ""
    };
  }

  componentDidMount() {
    const answerOptions = quizQuestions.map(question =>
      (question.answers)
    );
    this.setState({
      question: quizQuestions[this.state.counter].question,
      answerOptions: answerOptions[this.state.counter]
    });
  }
  setUserAnswer(answer) {
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  handleAnswerSelected(event) {

    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        // do nothing for now
      }
  }
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }


  render() {
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);

    return (
      <div>
        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    );
  }
}

export default App;
