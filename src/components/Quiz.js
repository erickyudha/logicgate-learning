import React from "react";
import Leaderboards from "./Leaderboards";
import Navbar from "./Navbar";
import "../styles/quiz.css"
import QuizPanel from "./QuizPanel";

export default function Quiz() {
    return (
        <main>
            <Navbar location="quiz" />
            
            <div className="quiz-content">
                <QuizPanel />
                <div></div>
                <Leaderboards />

            </div>
            
        </main>
    );
}