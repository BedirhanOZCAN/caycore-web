import React, {
    useEffect,
    useRef
} from "react";
import useStyles from "./stylesheet";


const Footer = ({
    isSticky = false,
    isVisible
}) => {
    const classes = useStyles();



    const fullYear = new Date().getFullYear();

    return <div
        className={classes.container}
        style={{
            display: isVisible ? "flex" : "none",
            position: isSticky ? "fixed" : "relative"
        }}
    >
        <img
            src="/assets/images/nibgat-logo.png"
            className={classes.logo}
            alt="footer-logo"
        />
        <span>
            Telif Hakkı {fullYear} - <b>NİBGAT | </b>
        </span>
    </div>;

};

export default Footer;