import React from "react";
import Question from "./Components/Question";
import Quiz from "./Components/Quiz";
import AnswerOption from "./Components/AnswerOption";
import quizQuestions from "./Api/quizQuestions";
import Correctness from "./Components/QuestionCorrectness";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.addCorrectAnswer = this.addCorrectAnswer.bind(this);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      rightAnswers: 0,
      wrongAnswers: 0,
      correct: false
    };
  }

  componentDidMount() {
    const answerOptions = quizQuestions.map(question => question.answers);
    this.setState({
      question: quizQuestions[this.state.counter].question,
      answerOptions: answerOptions[this.state.counter]
    });
    console.log(this.state.rightAnswers);
  }

  handleAnswerSelected(event) {
    for (var i = 0; i < quizQuestions.length; i++) {
      function isCorrect(guess) {
        var theCorrectAnswer = guess.answers[i].isTheAnswer === true;
        var theCorrectAnswerContent = guess.answers[i].content;
        if (
          theCorrectAnswer &&
          theCorrectAnswerContent === event.currentTarget.value
        ) {
          console.log("Correct");
          this.addCorrectAnswer()
        } else if (
          !theCorrectAnswer &&
          theCorrectAnswerContent === event.currentTarget.value
        ) {
          console.log("Incorrect");
        }
      }

      quizQuestions.find(isCorrect);
    }
  }

  // if (this.state.questionId < quizQuestions.length) {
  //   setTimeout(() => this.setNextQuestion(), 300);
  // }
  // }

  addCorrectAnswer(rightAnswers){
    this.setState({
      rightAnswers: this.state.rightAnswers + 1
    })

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
