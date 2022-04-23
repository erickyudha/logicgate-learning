import React from "react";
import "../styles/quizpanel.css";
import onlineTest from "../images/Online test.gif";
import { Link } from "react-router-dom";

export default function QuizPanel() {
  return (
    <div className="quiz-panel">
      <img draggable={false} src={onlineTest} alt="online test" />
      <Link to="/start-quiz">
        <button className="start-quiz-btn">Start Quiz</button>
      </Link>
    </div>
  );
}