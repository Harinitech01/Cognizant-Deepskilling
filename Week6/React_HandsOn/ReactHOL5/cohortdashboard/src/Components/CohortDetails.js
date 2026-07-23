import React from "react";
import styles from "../CohortDetails.module.css";

function CohortDetails(props) {

    return (

        <div className={styles.box}>

            <h3
                style={{
                    color: props.status === "Ongoing" ? "green" : "blue"
                }}
            >
                {props.cohortName}
            </h3>

            <dl>

                <dt>Trainer</dt>
                <dd>{props.trainer}</dd>

                <dt>Status</dt>
                <dd>{props.status}</dd>

                <dt>Strength</dt>
                <dd>{props.strength}</dd>

                <dt>Duration</dt>
                <dd>{props.duration}</dd>

            </dl>

        </div>

    );

}

export default CohortDetails;