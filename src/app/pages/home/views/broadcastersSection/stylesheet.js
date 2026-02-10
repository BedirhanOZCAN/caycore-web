import {
    createUseStyles
} from "react-jss"


const useStyles = createUseStyles({
    container: {
        backgroundColor: "#e3e3e3",
        justifyContent: "center",
        boxSizing: "border-box",
        flexDirection: "column",
        alignItems: "center",
        userSelect: "none",
        display: "flex",
        padding: "40px",
        height: "75%",
        width: "100%",
        "@media screen and (max-width: 800px)": {
            height: "auto"
        }
    },
    title: {
        fontFamily: "inter_18pt-Bold",
        marginBottom: "40px",
        color: "#212121",
        fontSize: "34px"
    },
    contentContainer: {
        justifyContent: "space-between",
        fontFamily: "inter_18pt-Regular",
        alignItems: "center",
        flexDirection: "row",
        maxWidth: "90%",
        display: "flex",
        gap: "20px",
        "& p": {
            fontSize: "20px",
            textAlign: "justify"
        },
        "@media screen and (max-width: 800px)": {
            justifyContent: "center",
            flexDirection: "column"
        }
    },
    loading: {
        width: "50px",
        height: "auto"
    }

}, {
    name: "Broadcasters-Section"
});
export default useStyles;