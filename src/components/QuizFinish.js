import React from "react";
import { Link } from "react-router-dom";
import "../styles/quizfinish.css";
import DoneGreen from "../images/Done-green.gif";
import DoneRed from "../images/Done-red.gif";

export default function QuizFinish(props) {
    const { score, correctAnswer, questionTotal, isAnswerCorrect } = props;
    const bgClass = (isAnswerCorrect) ? "bg-green" : "bg-red";

    return (
        <div className={`quiz-finish-screen ${bgClass}`}>
            <img draggable={false} src={(bgClass == "bg-green") ? DoneGreen : DoneRed} />
            <div className="quiz-finish-content">
                <h1>Quiz Finished</h1>
                <input type="text" placeholder="Insert Your Name Here" />
                <h3>Final Score <span className="final-score">{score}</span></h3>
                <h4><b>{correctAnswer}</b> out of <b>{questionTotal}</b> question is correct.</h4>
                <Link to="/quiz" className="finish-btn">Finish</Link>
            </div>
        </div>
    )
}