import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Learning from "./Learning";
import Navbar from "./Navbar";
import Quiz from "./Quiz";
import QuizCountdown from "./QuizCountdown";

export default function App() {

    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/start-quiz" element={<QuizCountdown initialSeconds={5} questionNum={1} />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}