import React from "react";
import PropTypes from "prop-types";

function AnswerOption(props) {
  return (
    <ul className="container">
      <div className="row">
        <li className=" answerOption col-lg-12 col-sm-12">

          <button
            className="col-lg-12 col-sm-12 radioCustomLabel border rounded-pill p-3 mb-2 bg-dark text-white"
            htmlFor={props.answerType}
            checked={props.answerType === props.answer}
            id={props.answerType}
            value={props.answerContent}
            disabled={props.answer}
            onClick={props.onAnswerSelected}
            answer={props.answer}
          >
            {props.answerContent}
          </button>
        </li>
      </div>
    </ul>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
