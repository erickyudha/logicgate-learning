import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar(props) {
    let navItems = [];
    if (props.location == "home") {
        navItems = [
            <Link id="navItem1" key="navItem1" className="nav-item nav-link active" to="/">Home</Link>,
            <Link id="navItem2" key="navItem2" className="nav-item nav-link" to="/learning">Learning</Link>,
            <Link id="navItem3" key="navItem3" className="nav-item nav-link" to="/quiz">Quiz</Link>
        ];
    } else if (props.location == "learning") {
        navItems = [
            <Link id="navItem1" key="navItem1" className="nav-item nav-link" to="/">Home</Link>,
            <Link id="navItem2" key="navItem2" className="nav-item nav-link active" to="/learning">Learning</Link>,
            <Link id="navItem3" key="navItem3" className="nav-item nav-link" to="/quiz">Quiz</Link>
        ];
    } else if (props.location == "quiz") {
        navItems = [
            <Link id="navItem1" key="navItem1" className="nav-item nav-link" to="/">Home</Link>,
            <Link id="navItem2" key="navItem2" className="nav-item nav-link" to="/learning">Learning</Link>,
            <Link id="navItem3" key="navItem3" className="nav-item nav-link active" to="/quiz">Quiz</Link>
        ];
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Learn LogicGate</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {navItems}
                </div>
            </div>
        </nav>
    )
}