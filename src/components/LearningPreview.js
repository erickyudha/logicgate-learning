import React from "react";
import chalkboardImg from "../images/chalkboard-user-solid.svg";
import "../styles/learningpreview.css";

export default function LearningPreview() {
    return (
        <div className="learning-preview">
            <img src={chalkboardImg} alt="Chalkboard Image" />
            <div className="learning-preview-content">
                <h1>Online Learning</h1>
                <p>
                    Learn all about logic gates and how to use them to solve problems.
                    Everything is explained very well using images and videos.
                </p>
                <button className="learning-preview-button my-button" type="button">Lets Go!</button>
            </div>
        </div>
    );
}