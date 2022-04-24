import React, { useRef } from "react";
import { useState } from "react";
import "../styles/simplequiz.css";
import { useEffect } from "react";
import QuizCountdown from "./QuizCountdown";

export default function Quiz(props) {
    const {name} = props;
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
        {
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [showLoading, setShowLoading] = useState(true);
	const [score, setScore] = useState(0);
    const isAnswerCorrect = useRef(null);
    const startTime = useRef(null);
    const endTime = useRef(null);
    const maxScore = 10000;

	const handleAnswerOptionClick = (isCorrect) => {
        isAnswerCorrect.current = isCorrect;
        function calculateScore(startSeconds, endSeconds) {
            const timeTaken = endSeconds - startSeconds;
            const score = (maxScore / questions.length) - (timeTaken * timeTaken);
            return (score > 0) ? score : 0;
        }

		if (isCorrect) {
            endTime.current = new Date().getSeconds();
			setScore(score + calculateScore(startTime.current, endTime.current));
		}

        handleNextQuestion();
	};

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
            setShowLoading(true);
		} else {
			setShowScore(true);
		}
    };
        

    const loadingScreen = (isCorrect) => {
        return <QuizCountdown countdown = {5} questionNum={currentQuestion + 1} score={score} isCorrect={isAnswerCorrect.current} />;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 5000);
        return () => {
            clearTimeout(timer);
            startTime.current = new Date().getSeconds();
        }
    }, [showLoading])

	return (
		<div className='app'>
            {showLoading ? loadingScreen() : null}

			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<div className="quiz-container">
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}