import React from "react";
import { useState, useEffect, useRef } from "react";
import QuizSession from "./QuizSession";
import QuizSession2 from "./QuizSession2";
import QuizSession3 from "./QuizSession3";
import QuizSession4 from "./QuizSession4";
import QuizSession5 from "./QuizSession5";
import questionData from "../sample/question";
import QuizCountdown from "./QuizCountdown";

export default function StartQuiz() {
    function shuffleArray(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }

    const questionSet = shuffleArray(questionData).slice(0, 5);
    let totalScore = useRef(0);
    let currentQuestion = useRef(0);
    const quizSes = [QuizSession, QuizSession2, QuizSession3, QuizSession4, QuizSession5];
    let [ questionToggle, setQuestionToggle ] = useState(false);
    let nowShowing = useRef(getQuizElement1(currentQuestion.current));

    function getQuizElement1(questionIndex) {
        return <QuizSession 
            betweenTime={5}
            questionNum={questionIndex + 1}
            totalScore={totalScore.current}
            withImage={questionSet[questionIndex].withImage}
            imageUrl={questionSet[questionIndex].imageUrl}
            text={questionSet[questionIndex].text}
            option={questionSet[questionIndex].option}
            correct={questionSet[questionIndex].correct}
            incorrect={questionSet[questionIndex].incorrect}
            duration={questionSet[questionIndex].duration}
            nextQuestionFunction={nextQuestion}
        />
    }

    function getQuizElement2(questionIndex) {
        return <QuizSession2
            betweenTime={5}
            questionNum={questionIndex + 1}
            totalScore={totalScore.current}
            withImage={questionSet[questionIndex].withImage}
            imageUrl={questionSet[questionIndex].imageUrl}
            text={questionSet[questionIndex].text}
            option={questionSet[questionIndex].option}
            correct={questionSet[questionIndex].correct}
            incorrect={questionSet[questionIndex].incorrect}
            duration={questionSet[questionIndex].duration}
            nextQuestionFunction={nextQuestion}
        />
    }

    function getQuizElement3(questionIndex) {
        return <QuizSession3
            betweenTime={5}
            questionNum={questionIndex + 1}
            totalScore={totalScore.current}
            withImage={questionSet[questionIndex].withImage}
            imageUrl={questionSet[questionIndex].imageUrl}
            text={questionSet[questionIndex].text}
            option={questionSet[questionIndex].option}
            correct={questionSet[questionIndex].correct}
            incorrect={questionSet[questionIndex].incorrect}
            duration={questionSet[questionIndex].duration}
            nextQuestionFunction={nextQuestion}
        />
    }

    function getQuizElement4(questionIndex) {
        return <QuizSession4 
            betweenTime={5}
            questionNum={questionIndex + 1}
            totalScore={totalScore.current}
            withImage={questionSet[questionIndex].withImage}
            imageUrl={questionSet[questionIndex].imageUrl}
            text={questionSet[questionIndex].text}
            option={questionSet[questionIndex].option}
            correct={questionSet[questionIndex].correct}
            incorrect={questionSet[questionIndex].incorrect}
            duration={questionSet[questionIndex].duration}
            nextQuestionFunction={nextQuestion}
        />
    }

    function getQuizElement5(questionIndex) {
        return <QuizSession5 
            betweenTime={5}
            questionNum={questionIndex + 1}
            totalScore={totalScore.current}
            withImage={questionSet[questionIndex].withImage}
            imageUrl={questionSet[questionIndex].imageUrl}
            text={questionSet[questionIndex].text}
            option={questionSet[questionIndex].option}
            correct={questionSet[questionIndex].correct}
            incorrect={questionSet[questionIndex].incorrect}
            duration={questionSet[questionIndex].duration}
            nextQuestionFunction={nextQuestion}
        />
    }

    function nextQuestion(score) {
        totalScore.current += score;
        currentQuestion.current++;
        nowShowing.current = null;
        if (currentQuestion.current == 1) {
            nowShowing.current = getQuizElement2(currentQuestion.current);
        } else if (currentQuestion.current == 2) {
            nowShowing.current = getQuizElement3(currentQuestion.current);
        } else if (currentQuestion.current == 3) {
            nowShowing.current = getQuizElement4(currentQuestion.current);
        } else if (currentQuestion.current == 4) {
            nowShowing.current = getQuizElement5(currentQuestion.current);
        } else if (currentQuestion.current == 5) {
            nowShowing.current = <h1>Done</h1>;
        }
        setQuestionToggle(!questionToggle);
    }

    return (
        <div className="quiz-container">
            {nowShowing.current}
        </div>
    );
}