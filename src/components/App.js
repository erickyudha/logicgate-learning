import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Learning from "./Learning";
import Navbar from "./Navbar";
import Quiz from "./Quiz";

export default function App() {

    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/" element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}