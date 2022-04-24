import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountdownBar from "./CountdownBar";
import Home from "./Home";
import Learning from "./Learning";
import Navbar from "./Navbar";
import Quiz from "./Quiz";
import QuizCountdown from "./QuizCountdown";
import QuizMain from "./QuizMain";
import QuizSession from "./QuizSession";
import StartQuiz from "./StartQuiz";

export default function App() {

    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/test" element= {<QuizSession />} />
                <Route path="/start-quiz" element={<StartQuiz />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}