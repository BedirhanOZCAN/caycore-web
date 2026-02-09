import {
    createUseStyles
} from "react-jss"
import { clickEvent } from "../../themes/helpers";

const useStyles = createUseStyles({
    container: {
        transform: "translateX(-101%)",
        transition: "transform 1s",
        userSelect: "none",
        position: "fixed",
        zIndex: 9999,
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
        "&.isActive": {
            transform: "translateX(0%)",
            transition: "transform 1s"
        }
    },

    filter: {
        backgroundColor: ({
            props
        }) => props.colors.modalBackground,
        backdropFilter: "blur(10px)",
        zIndex: 99991,
        height: "100%",
        width: "100%"
    },

    menuContainer: {
        backdropFilter: "blur(10px)",
        backgroundColor: ({
            props
        }) => props.colors.modalContentWithOpacity,
        flexDirection: "column",
        boxSizing: "border-box",
        position: "absolute",
        zIndex: 99992,
        display: "flex",
        padding: 20,
        height: "100%",
        width: "25em",
        bottom: 0,
        left: 0,
        top: 0
    },

    menuHeaderContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        padding: "0px 20px",
        display: "flex",
        "& span": {
            fontFamily: "inter_18pt-SemiBold",
            fontSize: 24
        },
        "& i": {
            padding: ({
                props
            }) => props.spaces.container
        },
        "& i:hover": {
            ...clickEvent(),
            color: ({
                props
            }) => props.colors.primary
        }
    },

    seperator: {
        marginBottom: 10
    },

    button: {
        padding: ({
            props
        }) => `${props.spaces.container / 2}px 0px !important`,
        "&:hover span": {
            color: ({
                props
            }) => `${props.colors.primary} !important`
        }
    }

}, {
    name: "SideMenu-Component"
});
export default useStyles;