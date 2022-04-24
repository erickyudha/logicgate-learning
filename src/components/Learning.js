import React from "react";
import LearningSidebar from "./LearningSidebar";
import LearningContent from "./LearningContent";
import Navbar from "./Navbar";
import "../styles/learning.css";
import material from "../data/material";
import { useState } from "react";

export default function Learning() {
    const materialTitleList = material.map(material => material.title);
    const [ selectedMaterial, setSelectedMaterial ] = useState(material[0]);

    const getSelectedMaterial = (title) => {
        setSelectedMaterial(() => {
            return material.find(material => material.title === title);
        });
    }

    return (
        <main>
            <Navbar  location="learning" />
            <div className="learning-main">
                <LearningSidebar titleList={materialTitleList} getFunction={getSelectedMaterial} />
                <LearningContent materialData={selectedMaterial} />
            </div>
        </main>
    );
}