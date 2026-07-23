import React from "react";
import "../stylesheets/mystyle.css";

function CalculateScore(props) {

    const average = props.total / props.goal;

    return (
        <div className="box">
            <h2>Student Details</h2>

            <p><strong>Name:</strong> {props.name}</p>

            <p><strong>School:</strong> {props.school}</p>

            <p><strong>Total Score:</strong> {props.total}</p>

            <p><strong>Goal:</strong> {props.goal}</p>

            <h3>Average Score : {average}</h3>
        </div>
    );
}

export default CalculateScore;