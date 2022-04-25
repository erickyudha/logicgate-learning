import React from "react";
import { useState } from "react";
import "../styles/learningsidebar.css";

export default function LearningSidebar(props) {
    const {titleList, getFunction} = props;
    let [ selectedButton, setSelectedButton ]  = useState("Logic Gates");

    const handleClick = (e) => {
        getFunction(e.target.innerText);
        setSelectedButton(() => e.target.innerText);
    };

    let materialList = titleList;
    let buttonList = materialList.map(material => {
        return (
            <button className={material === selectedButton ? "learning-sidebar-list-active" : ""} key={material} onClick={handleClick} >
                {material}
            </button>
        );
    })

    return (
        <div className="learning-sidebar">
            <h1>Learning Material</h1>
            <div className="learning-sidebar-list">
                {buttonList}
            </div>
        </div>
    );
}