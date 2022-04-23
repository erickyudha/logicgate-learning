import React from "react";
import { useState, useEffect } from "react";
import "../styles/quizcountdown.css";

export default function QuizCountdown(props) {
    const { initialSeconds = 0, questionNum = 1, score=0 } = props;
    const [seconds, setSeconds ] =  useState(initialSeconds);

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
        <div className="countdown-screen">
            <h1>QUESTION {questionNum}</h1>
            <div className="counter">
                <h1>{seconds}</h1>
            </div>
            <h2>Score <span>{score}</span></h2>
        </div>
    )
}