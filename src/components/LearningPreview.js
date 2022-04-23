import React from "react";
import { Link } from "react-router-dom";
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
                <Link to="/learning">
                    <button className="learning-preview-button my-button" type="button">Lets Go!</button>
                </Link>

            </div>
        </div>
    );
}