import React from "react";
import "../styles/quizpreview.css";
import trophyImage from "../images/trophy-solid.svg";

export default function QuizPreview() {
    return (
        <div className="quiz-preview">
            <img src={trophyImage} alt="Trophy Image" />
            <div className="quiz-preview-content">
                <h1>Quiz</h1>
                <p>
                    Time to test your knowledge on logic gates. Solve multiple choice question and get ranked on global leaderboards.
                </p>
                <button className="quiz-preview-button my-button" type="button">Lets Go!</button>
            </div>
        </div>
    );
}