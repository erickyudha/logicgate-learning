import React from "react";
import "../styles/learningcontent.css";
import contohTabel from "../images/contoh-tabel-kebenaran.jpg";

export default function LearningContent() {
    return (
        <div className="learning-content">
            <h1 className="material-title">Logic Gates</h1>
            <div className="material-content-list">

                <div className="material-content-item">
                    <h2>Pengertian</h2>
                    <p>
                        Logic adalah suatu sistem logika yang menggunakan konsep matematika.
                        Logic dapat digunakan untuk mengatur suatu konsep matematika.
                        Logic dapat digunakan untuk mengatur suatu konsep matematika.
                        Logic dapat digunakan untuk mengatur suatu konsep matematika.
                    </p>
                </div>

                <div className="material-content-item">
                    <h2>Gambar Gerbang Logika</h2>
                    <img src={contohTabel} alt="Logic" />
                </div>

                <div className="material-content-item">
                    <h2>Simbol Logika dan Tabel Kebenaran</h2>
                    <img src={contohTabel} alt="Logic" />
                </div>

                <div className="material-content-item">
                    <h2>Video Penjelasan</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8AXgd3ua2xg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}