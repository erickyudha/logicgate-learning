import React from "react";
import { useState, useEffect } from "react";
import "../styles/quizcountdown.css";

export default function QuizCountdown(props) {
    const { countdown = 0, questionNum = 1, score=0, isCorrect=null} = props;
    const [seconds, setSeconds ] =  useState(countdown);

    function getBgClass() {
        if (isCorrect === null) {
            return "bg-yellow";
        } else if (isCorrect) {
            return "bg-green";
        } else {
            return "bg-red";
        }
    }

    const bgClass = getBgClass();

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                clearInterval(myInterval)
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div className={`countdown-screen ${bgClass}`}>
            <h1>QUESTION {questionNum}</h1>
            <div className="counter">
                <h1>{seconds}</h1>
            </div>
            <h2>Score <span>{score}</span></h2>
        </div>
    )
}