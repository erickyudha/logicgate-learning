import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import LearningPreview from "./LearningPreview";
import QuizPreview from "./QuizPreview";

export default function App() {
    return (
        <div>
            <Navbar />


            <Hero />
            <LearningPreview />
            <QuizPreview />

        </div>
    )
}