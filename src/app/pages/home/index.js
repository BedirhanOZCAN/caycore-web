import WelcomeSeciton from "./views/welcomeSection";
import useStyles from "./stylesheet";
import SummarySeciton from "./views/summarySection";
import BroadcastersSection from "./views/broadcastersSection";
import { Footer } from "../../components";

const Home = ({
    isMainFooterVisible
}) => {
    const classes = useStyles();

    return <div
        className={classes.container}
    >
        <WelcomeSeciton />
        <div
            className={classes.broadcastContainer}
        >
            <div
                className={classes.broadcastIndicator}
            >
                <div></div>
            </div>
            Yayın akışını görüntüleyin. <img src="./assets/icons/chevron-right.svg" alt="" />
        </div>
        <SummarySeciton />
        <BroadcastersSection />
        <Footer
            isVisible={!isMainFooterVisible}
            isSticky={false}
        />
    </div>
};
export default Home;