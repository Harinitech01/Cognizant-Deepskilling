import React from "react";

function IndianPlayers() {

    const oddTeam = [
        "Virat",
        "Gill",
        "Hardik",
        "Ashwin",
        "Bumrah"
    ];

    const evenTeam = [
        "Rohit",
        "Rahul",
        "Jadeja",
        "Shami",
        "Siraj"
    ];

    const [p1, p2, p3, p4, p5] = oddTeam;
    const [e1, e2, e3, e4, e5] = evenTeam;

    const T20players = [
        "Virat",
        "Rohit",
        "Hardik"
    ];

    const RanjiPlayers = [
        "Pujara",
        "Rahane",
        "Saha"
    ];

    const mergedPlayers = [...T20players, ...RanjiPlayers];

    return (

        <div>

            <h2>Odd Team Players</h2>

            <ul>
                <li>{p1}</li>
                <li>{p2}</li>
                <li>{p3}</li>
                <li>{p4}</li>
                <li>{p5}</li>
            </ul>

            <h2>Even Team Players</h2>

            <ul>
                <li>{e1}</li>
                <li>{e2}</li>
                <li>{e3}</li>
                <li>{e4}</li>
                <li>{e5}</li>
            </ul>

            <h2>Merged Players</h2>

            <ul>
                {
                    mergedPlayers.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>

        </div>

    );

}

export default IndianPlayers;