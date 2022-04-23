import React from "react";
import Leaderboards from "./Leaderboards";
import Navbar from "./Navbar";
import "../styles/quiz.css"

export default function Quiz() {
    return (
        <main>
            <Navbar location="quiz" />
            
            <div className="quiz-content">
                <Leaderboards />    
                <div></div>
            </div>
            
        </main>
    );
}