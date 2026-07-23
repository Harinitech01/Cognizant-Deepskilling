import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {

    return (

        <div>

            <h1>My Academy Dashboard</h1>

            <CohortDetails
                cohortName="Java FSE"
                trainer="John"
                status="Ongoing"
                strength="28"
                duration="8 Weeks"
            />

            <CohortDetails
                cohortName="React"
                trainer="David"
                status="Completed"
                strength="32"
                duration="6 Weeks"
            />

            <CohortDetails
                cohortName="Spring Boot"
                trainer="Sarah"
                status="Ongoing"
                strength="25"
                duration="10 Weeks"
            />

            <CohortDetails
                cohortName="Microservices"
                trainer="Peter"
                status="Completed"
                strength="30"
                duration="7 Weeks"
            />

        </div>

    );

}

export default App;