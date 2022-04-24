import React from "react";

export default function QuizFinish(props) {
    const { name, score, correctAnswer } = props;
    return (
        <div className="quiz-finish-screen">
            <h1>Quiz Finished</h1>
            <h2>Your score is {props.score}</h2>
            <button onClick={props.onRestart}>Restart</button>
        </div>
    )
}