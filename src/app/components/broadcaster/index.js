import React, {
    useEffect,
    useState
} from "react";
import useStyles from "./stylesheet";


const Broadcaster = ({
    photoURL,
    fullName,
    job
}) => {
    const classes = useStyles()


    return <div
        className={classes.broadcastersContainer}
    >
        <img
            src={photoURL}
            className={classes.broadcastersProfilePhoto}
            alt="broadcaster"
        />
        <div
            className={classes.broadcastersContentContainer}
        >
            <span>{fullName}</span>
            <span>{job}</span>
        </div>
    </div>;

};

export default Broadcaster;