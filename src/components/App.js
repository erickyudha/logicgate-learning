import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Learning from "./Learning";
import Quiz from "./Quiz";
import QuizFinish from "./QuizFinish";
import SimpleQuiz from "./SimpleQuiz";

export default function App() {

    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/start-quiz" element={<SimpleQuiz questionNumber={10} />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}