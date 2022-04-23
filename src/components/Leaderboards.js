import React from "react";
import "../styles/leaderboard.css"
import winnerImg from "../images/Winners.gif"

export default function Leaderboards() {
    return (
        <main className="leaderboards">
            <div className="leaderboards-header">
                <img draggable={false} src={winnerImg} alt="winner" />
                <h1>Leaderboards</h1>
                <div className="leaderboards-header-content">
                    <button className="my-button">Today</button>
                    <button className="my-button">All-time</button>
                </div>
            </div>

            <div className="leaderboards-content">

                <div className="leaderboards-row">
                    <div className="leaderboards-row-num">
                        1
                    </div>
                    <div className="leaderboards-row-name">
                        John Doe
                    </div>
                    <div className="leaderboards-row-score">
                        10000
                    </div>
                </div>

                <div className="leaderboards-row">
                    <div className="leaderboards-row-num">
                        2
                    </div>
                    <div className="leaderboards-row-name">
                        John Doe
                    </div>
                    <div className="leaderboards-row-score">
                        10000
                    </div>
                </div>

                <div className="leaderboards-row">
                    <div className="leaderboards-row-num">
                        3
                    </div>
                    <div className="leaderboards-row-name">
                        John Doe
                    </div>
                    <div className="leaderboards-row-score">
                        10000
                    </div>
                </div>



            </div>



        </main>
    )
}