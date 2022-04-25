import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/quizfinish.css";
import DoneGreen from "../images/Done-green.gif";
import DoneRed from "../images/Done-red.gif";
import Api from "../api-config";

export default function QuizFinish(props) {
    const { score, correctAnswer, questionTotal, isAnswerCorrect } = props;
    const [ name, setName ] = useState("");
    const bgClass = (isAnswerCorrect) ? "bg-green" : "bg-red";

    

    function setNameData(e) {
        setName(e.target.value);
    }

    async function handleFinish() {
        try {
            const postData = async () => {
                const today = new Date();

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    function formatDate(date) {
        return [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-');
    }

    const formattedToday = formatDate(today)

                const quizData = {
                    name: (name.length > 0) ? name : "Anonymous",
                    score: score,
                    time: formattedToday
                }
                const response = await fetch(`${Api.baseUrl}/leaderboards`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(quizData)
                });
                const data = await response.json();
            }
            postData();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className={`quiz-finish-screen ${bgClass}`}>
            <img draggable={false} src={(bgClass == "bg-green") ? DoneGreen : DoneRed} />
            <div className="quiz-finish-content">
                <h1>Quiz Finished</h1>
                <input onChange={setNameData} type="text" placeholder="Insert Your Name Here" />
                <h3>Final Score <span className="final-score">{score}</span></h3>
                <h4><b>{correctAnswer}</b> out of <b>{questionTotal}</b> question is correct.</h4>
                <Link to="/quiz" className="finish-btn" onClick={handleFinish}>Finish</Link>
            </div>
        </div>
    )
}