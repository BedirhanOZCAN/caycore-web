import {
    createUseStyles
} from "react-jss"


const useStyles = createUseStyles({
    container: {
        backgroundImage: "url('../assets/images/cay-core-banner.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        userSelect: "none",
        height: "70%",
        width: "100%"
    },

    filter: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "relative",
        height: "100%",
        width: "100%"
    },

    contentContainer: {
        alignItems: "flex-start",
        flexDirection: "column",
        position: "absolute",
        display: "flex",
        bottom: "10%",
        width: "40%",
        left: "40px",
        gap: "20px",
        "& span:nth-child(1)": {
            fontFamily: "inter_18pt-Regular",
            fontSize: "26px",
            color: "white"
        },
        "& span:nth-child(2)": {
            fontFamily: "inter_18pt-Light",
            lineHeight: "22px",
            fontSize: "16px",
            marginBottom: 4,
            color: "white"
        }
    },

    title: {

    },

    content: {

    },

    button: {

    }
}, {
    name: "Welcome-Section"
});
export default useStyles;