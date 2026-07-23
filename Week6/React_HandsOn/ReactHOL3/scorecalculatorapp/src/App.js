import React from "react";
import CalculateScore from "./components/CalculateScore";

function App() {
    return (
        <div>
            <CalculateScore
                name="Harini"
                school="SKCET"
                total={480}
                goal={5}
            />
        </div>
    );
}

export default App;