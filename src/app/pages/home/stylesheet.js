import {
    createUseStyles
} from "react-jss"
import {
    clickEvent
} from "../../themes/helpers/index"

const useStyles = createUseStyles({

    "@global": {
        "@keyframes broadcastAnim": {
            "0%": {
                height: "10px",
                width: "10px"
            },
            "100%": {
                background: "rgba(255, 255, 255, 0)",
                height: "40px",
                width: "40px"
            }
        }
    },
    container: {
        height: "100%",
        width: "100%"
    },

    broadcastContainer: {
        backgroundImage: "linear-gradient(90.45deg, #FF001F 0%, #470009 100%)",
        fontFamily: "inter_18pt-SemiBold",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        userSelect: "none",
        fontSize: "20px",
        padding: "40px",
        ...clickEvent(),
        display: "flex",
        color: "white",
        gap: "10px"
    },

    broadcastIndicator: {
        backgroundColor: "transparent",
        border: "2px solid white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        position: "relative",
        display: "flex",
        height: "25px",
        width: "25px",
        "& div": {
            backgroundColor: "white",
            borderRadius: "50%",
            position: "absolute",
            height: "18px",
            width: "18px"

        },
        "&:before": {
            animation: "broadcastAnim 1.5s ease-in-out infinite",
            position: "absolute",
            borderRadius: "50%",
            background: "white",
            content: "''"
        }
    }
}, {
    name: "Home-Page"
});
export default useStyles;