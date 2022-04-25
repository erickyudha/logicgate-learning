import React from "react";
import { useEffect, useState } from "react"
import "../styles/leaderboard.css"
import winnerImg from "../images/Winners.gif"
import Api from "../api-config"

export default function Leaderboards() {
    const [ leaderboardActive, setLeaderboardActive ] = useState("today");
    const [ leaderboardData, setLeaderboardData ] = useState([]);

    function setLeaderboard(e) {
        setLeaderboardActive(e.target.id);
    }

    const leaderboardElements = leaderboardData.map((leaderboard, index) => {
        return (
            <div className="leaderboards-row">
                <div className="leaderboards-row-num">
                    {index + 1}
                </div>
                <div className="leaderboards-row-name">
                    {leaderboard.name}
                </div>
                <div className="leaderboards-row-score">
                    {leaderboard.score}
                </div>
            </div>
        )
    })

    useEffect(() => {
        if (leaderboardActive === "today") {
            const fetchToday = async () => {
                const response = await fetch(`${Api.baseUrl}/leaderboards/today`);
                const data = await response.json();
                setLeaderboardData(data.data);
            }
            fetchToday();
        } else if (leaderboardActive === "alltime") {
            const fetchAllTime = async () => {
                const response = await fetch(`${Api.baseUrl}/leaderboards/alltime`);
                const data = await response.json();
                setLeaderboardData(data.data);
            }
            fetchAllTime();
        }
    }, [leaderboardActive]); 

    


    return (
        <main className="leaderboards">
            <div className="leaderboards-header">
                <img draggable={false} src={winnerImg} alt="winner" />
                <h1>Leaderboards</h1>
                <div className="leaderboards-header-content">
                    <button id="today" className={`my-button lb-btn ${(leaderboardActive == "today") ? "lb-active-btn" : ""}`} onClick={setLeaderboard}>Today</button>
                    <button id="alltime" className={`my-button lb-btn ${(leaderboardActive == "alltime") ? "lb-active-btn" : ""}`} onClick={setLeaderboard}>All-time</button>
                </div>
            </div>

            <div className="leaderboards-content">

                {leaderboardData.length > 0 ? leaderboardElements : <div className="no-record">No record today...</div>}



            </div>



        </main>
    )
}