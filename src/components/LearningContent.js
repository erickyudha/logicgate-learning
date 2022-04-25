import React from "react";
import "../styles/learningcontent.css";
import contohTabel from "../images/contoh-tabel-kebenaran.jpg";
import material from "../data/material"

export default function LearningContent(props) {
    const { materialData=material[1] } = props;
    const materialElements = materialData.data.map(material => {
        return (
            <div className="material-content-item">
                <h2>{material.subtitle}</h2>
                {material.type === "text" && <p>{material.content}</p>}
                {material.type === "image" && <img src={material.content} alt="gambar" />}
                {material.type === "special" && <img src={material.content} alt="gambar" style={{width: "100%", height: "auto"}} />}
                {material.type === "video" && <iframe width="560" height="315" src={material.content} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
            </div>
        )
    })
    return (
        <div className="learning-content">
            <h1 className="material-title">{materialData.title}</h1>
            <div className="material-content-list">
                {materialElements}
            </div>
        </div>
    );
}