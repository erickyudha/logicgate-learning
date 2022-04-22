import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import LearningPreview from "./LearningPreview";
import QuizPreview from "./QuizPreview";

export default function Home() {
    return (
        <main>
            <Navbar location="home"/>

            <Hero />
            <LearningPreview />
            <QuizPreview />
        </main>
    );
}