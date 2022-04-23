import React from "react";
import { useState, useEffect } from "react";
import QuizCountdown from "./QuizCountdown";

export default function StartQuiz() {
    const [ questionNum, setQuestionNum ] = useState(1);
    const [ score, setScore ] = useState(0);
    const [ nowShowing, setNowShowing ] = useState(
        <QuizCountdown initialSeconds={5} questionNum={questionNum} score={score} />
    );

    const questionLimit = 5;
    const timeLimitMs = 10 * 1000;
    
    useEffect(()=>{
        while (questionNum <= questionLimit) {
            setTimeout(() => {
                setNowShowing(() => {
                    return <QuizCountdown initialSeconds={timeLimitMs / 1000} questionNum={questionNum} score={score} />
                });
            }, 5500);
            setTimeout(() => {
                setNowShowing(() => {
                    console.log("running");
                    return <QuizCountdown initialSeconds={timeLimitMs / 1000} questionNum={questionNum} score={score} />
                });
            }, timeLimitMs);
            setQuestionNum(questionNum + 1);
        }
    });

    return (
        <div className="quiz-container">
            {nowShowing}
        </div>
    );
}