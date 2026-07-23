import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 82 },
        { name: "Shubman Gill", score: 67 },
        { name: "KL Rahul", score: 78 },
        { name: "Hardik Pandya", score: 65 },
        { name: "Ravindra Jadeja", score: 74 },
        { name: "R Ashwin", score: 55 },
        { name: "Mohammed Shami", score: 40 },
        { name: "Jasprit Bumrah", score: 32 },
        { name: "Kuldeep Yadav", score: 71 },
        { name: "Mohammed Siraj", score: 60 }
    ];

    const lowScorers = players.filter(player => player.score < 70);

    return (

        <div>

            <h2>List of Players</h2>

            <ul>
                {
                    players.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }
            </ul>

            <h2>Players with Score below 70</h2>

            <ul>
                {
                    lowScorers.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }
            </ul>

        </div>

    );

}

export default ListofPlayers;