import React from "react";
import LearningSidebar from "./LearningSidebar";
import LearningContent from "./LearningContent";
import Navbar from "./Navbar";
import "../styles/learning.css";

export default function Learning() {
    return (
        <main>
            <Navbar  location="learning" />
            <div className="learning-main">
                <LearningSidebar />
                <LearningContent />
            </div>
        </main>
    );
}