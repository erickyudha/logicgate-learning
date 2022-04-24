import React from "react";
import { useState, useEffect, useRef } from "react";
import QuizCountdown from "./QuizCountdown";
import QuizSession from "./QuizSession";

export default function StartQuiz() {

    return (
        <div className="quiz-container">
            <QuizSession />
        </div>
    );
}