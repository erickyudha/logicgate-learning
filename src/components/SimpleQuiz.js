import React, { useRef } from "react";
import { useState } from "react";
import "../styles/simplequiz.css";
import { useEffect } from "react";
import QuizCountdown from "./QuizCountdown";
import QuizFinish from "./QuizFinish";
import questionData from "../data/question";

export default function Quiz(props) {
	const { questionNumber } = props;
	function ShuffleArray() {
		const array = questionData;
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	const questions = ShuffleArray(questionData).slice(0, questionNumber);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [showLoading, setShowLoading] = useState(true);
	const [score, setScore] = useState(0);
    const isAnswerCorrect = useRef(null);
    const startTime = useRef(null);
    const endTime = useRef(null);
    const eachScore = 2000;
	const correctAnswer = useRef(0);

	const handleAnswerOptionClick = (isCorrect) => {
        isAnswerCorrect.current = isCorrect;
        function calculateScore(startSeconds, endSeconds) {
            const timeTaken = endSeconds - startSeconds;
            const score = Math.ceil(eachScore - ((timeTaken * timeTaken) + (timeTaken * 5)));
            return (score > 0 && score <= eachScore) ? score : 100;
        }

		if (isCorrect) {
            endTime.current = new Date().getSeconds();
			correctAnswer.current++;
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
        

    const loadingScreen = () => {
        return <QuizCountdown countdown = {2} questionNum={currentQuestion + 1} score={score} isCorrect={isAnswerCorrect.current} />;
    }

	const loadFinishScreen = () => {
		return <QuizFinish score={score} correctAnswer={correctAnswer.current} questionTotal={questions.length} isAnswerCorrect={isAnswerCorrect.current} />
	}

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 2000);
        return () => {
            clearTimeout(timer);
            startTime.current = new Date().getSeconds();
        }
    }, [showLoading])

	return (
		<div className='app'>
            {showLoading ? loadingScreen() : null}

			{showScore ? (
				loadFinishScreen()
			) : (
				<div className="quiz-container">
					<div className={`question-section ${questions[currentQuestion].withImage ? "question-image" : "question-no-image"}`}>
						{questions[currentQuestion].withImage ? (
							<img src={questions[currentQuestion].imageUrl} alt={questions[currentQuestion].question} />
						) : null}
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					{console.log(questions[currentQuestion].options)}
					<div className={`answer-section ${(questions[currentQuestion].options == 2) ? "choice-2" : "choice-4"}`}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}