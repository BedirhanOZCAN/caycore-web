import {
    createUseStyles
} from "react-jss"


const useStyles = createUseStyles({

    "@global": {
        "@keyframes nibgatLogo": {
            "0%": {
                transform: "rotateZ(0deg)"
            },
            "100%": {
                transform: "rotateZ(-360deg)"
            }
        }
    },
    container: {
        justifyContent: "space-between",
        fontFamily: "inter_18pt-Regular",
        backgroundColor: "white",
        boxSizing: "border-box",
        padding: "20px 30px",
        flexDirection: "row",
        alignItems: "center",
        userSelect: "none",
        fontSize: "18px",
        width: "100%",
        bottom: 0,
        right: 0,
        left: 0
    },
    logo: {
        animation: "nibgatLogo 1s infinite linear",
        height: "50px"
    }
}, {
    name: "Footer-Component"
});
export default useStyles;