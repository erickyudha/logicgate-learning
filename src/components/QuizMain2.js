import React from "react";
import { useState, useEffect, useRef } from "react";
import "../styles/quizmain.css";
import CountdownBar from "./CountdownBar";

export default function QuizMain(props) {
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    const { 
        withImage,
        imageUrl,
        text,
        option,
        correct,
        incorrect,
        duration,
        getFunction
    } = props;

    const seconds = useRef(duration);

    function clickAnswer(e) {
        let score;
        let isCorrect;
        if (e.target.innerText === correct) {
            console.log("Correct!");
    
            score = (seconds.current / duration) * 2000;

            isCorrect = true;
        } else {
            console.log("Incorrect!");
            score = 0;

            isCorrect = false;
        }
        getFunction(isCorrect, score);
        seconds.current = -999;
    }

    const imgElement = <img src={imageUrl} />
    const choiceBgColor = shuffle(["#aa9ad9", "#d6e04a", "#e04acf", "#4ae0db"])
    const choices = shuffle([...incorrect, correct]);
    let colorIndex = 0;
    const choicesElement = choices.map(choice => {
        return <button className="quiz-button" onClick={clickAnswer} style={{backgroundColor: choiceBgColor[colorIndex++]}}>{choice}</button>
    })

    

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds.current > 0) {
                
                seconds.current -= 1;
            } else {
                clearInterval(myInterval)
                getFunction(false, 0);
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    }, [seconds]);

    return (
        <div className="quiz-main">
            <CountdownBar countdown={duration} />
            <div className={withImage ? "quiz-with-image" : "quiz-no-image"}>
                {withImage ? imgElement : ""}
                <h1>{text}</h1>
            </div>
            <div className={(option == 2) ? "quiz-choice-2" : "quiz-choice-4"}>
                {choicesElement}

                
            </div>
        </div>
    )
}