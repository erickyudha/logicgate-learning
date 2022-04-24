import React from "react";
import "../styles/quizpanel.css";
import onlineTest from "../images/Online test.gif";
import { Link } from "react-router-dom";

export default function QuizPanel() {
  return (
    <div className="quiz-panel">
      <img draggable={false} src={onlineTest} alt="online test" />
      <Link className="start-quiz-btn" to="/start-quiz">Start Quiz</Link>
    </div>
  );
}