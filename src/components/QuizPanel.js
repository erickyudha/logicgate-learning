import React from "react";
import "../styles/quizpanel.css";
import onlineTest from "../images/Online test.gif";

export default function QuizPanel() {
  return (
    <div className="quiz-panel">
      <img draggable={false} src={onlineTest} alt="online test" />
      <button className="my-button">Start Quiz</button>
    </div>
  );
}