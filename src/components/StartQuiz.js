import React from "react";
import { useState, useEffect, useRef } from "react";
import QuizCountdown from "./QuizCountdown";

export default function StartQuiz() {
    let questionNum = useRef(1);
    let [ isDone, setIsDone ] = useState(false);
    let score = 0;

    const questionLimit = 2;
    const betweenTimeLimit = 3;
    const timeLimit = 10;
    const timeLimitMs = timeLimit * 1000;
    const betweenTimeLimitMs = (betweenTimeLimit + 1) * 1000;

    const [ questionStarted, setQuestionStarted ] = useState(true);
    let nowShowing = useRef(<QuizCountdown countdown={2} questionNum={questionNum.current} score={score} />);

    useEffect(()=>{
        let timer;
        if (questionNum.current <= questionLimit && !isDone) {
            if(!questionStarted){
                nowShowing.current = <QuizCountdown countdown={2} questionNum={questionNum.current} score={score} />;
                timer = setTimeout(()=>{
                    setQuestionStarted(true);
                }, timeLimitMs);
            } else {
                nowShowing.current = <h1>Running</h1>;
                timer = setTimeout(()=>{
                    questionNum.current++;
                    setQuestionStarted(false);
                }, betweenTimeLimitMs);
            };  
        } else if (isDone) {
            console.log("Quiz Done");
        } else {
            nowShowing.current = <h1>Finished</h1>;
            timer = setTimeout(()=>{
                setIsDone(true);
            }, timeLimitMs);
        }
        return ()=>{
            clearTimeout(timer);
        }
    });

    return (
        <div className="quiz-container">
            {nowShowing.current}
        </div>
    );
}