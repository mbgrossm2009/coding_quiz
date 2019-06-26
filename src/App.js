import React from "react";
import Question from "./Components/Question";
import Quiz from "./Components/Quiz";
import AnswerOption from "./Components/AnswerOption";
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
      rightAnswers: 0,
      wrongAnswers: 0
    };
  }

  componentDidMount() {
    const answerOptions = quizQuestions.map(question => question.answers);
    this.setState({
      question: quizQuestions[this.state.counter].question,
      answerOptions: answerOptions[this.state.counter]
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    for (var i = 0; i < quizQuestions.length; i++) {
      // loop thru quizQuestions
      function isCorrect(guess) {
        if (
          guess.answers[i].isCorrect === true &&
          guess.answers[i].content === event.currentTarget.value
        ) {
          this.setState({
            rightAnswers: this.state.rightAnswers + 1
          });
        }
      }
      console.log(quizQuestions.find(isCorrect));
    }
  }

  //
  // if (this.state.questionId < quizQuestions.length) {
  //   setTimeout(() => this.setNextQuestion(), 300);
  // }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ""
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
