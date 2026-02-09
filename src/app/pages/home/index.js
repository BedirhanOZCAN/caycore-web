import WelcomeSeciton from "./views/welcomeSection";
import useStyles from "./stylesheet";
import { use } from "react";

const Home = () => {
    const classes = useStyles();

    return <div
        className={classes.container}
    >
        <WelcomeSeciton />
        Welcome to Home Page.
    </div>
};
export default Home;