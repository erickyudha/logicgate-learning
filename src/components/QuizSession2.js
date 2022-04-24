import React from "react";
import { useState, useEffect, useRef } from "react";
import QuizCountdown from "./QuizCountdown2";
import QuizMain from "./QuizMain2";
import CorrectScreen from "./CorrectScreen";
import IncorrectScreen from "./IncorrectScreen";

export default function QuizSession(props) {
    const {
        betweenTime,
        questionNum,
        totalScore,
        withImage,
        imageUrl,
        text,
        option,
        correct,
        incorrect,
        duration,
        nextQuestionFunction
    } = props;

    const [ answer, setAnswer ] = useState([false, 0]);
    const [ questionStarted, setQuestionStarted ] = useState(false);
    let nowShowing = useRef(<QuizCountdown countdown={betweenTime} questionNum={questionNum} score={totalScore} />);

    function getAnswer(isCorrect, score) {
        if (isCorrect) {
            nowShowing.current = <CorrectScreen />;
        } else {
            nowShowing.current = <IncorrectScreen />;
        }
        setAnswer([isCorrect, score]);
        nextQuestionFunction(score);
    }   

    useEffect(()=>{
        const timer = setTimeout(() => {
            nowShowing.current = <QuizMain  
                withImage={withImage}
                imageUrl={imageUrl}
                text={text}
                option={option}
                correct={correct}
                incorrect={incorrect}
                duration={duration}
                getFunction={getAnswer}
            />;
            setQuestionStarted(true);
        }, betweenTime * 1000);
        return ()=> {
            clearTimeout(timer);
        }
    }, []);
    
    return (
        <>
            {nowShowing.current}
        </>
    )
}