import {
    createUseStyles
} from "react-jss"
import { clickEvent } from "../../themes/helpers";

const useStyles = createUseStyles({
    container: {
        flexDirection: "row",
        alignItems: "center",
        display: "flex"
    },
    webAndDesktopContainer: {
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
        gap: 20,
        "@media screen and (max-width: 950px)": {
            display: "none !important"
        }
    },
    mobileContainer: {
        display: "none", //!  şu demek oluyor normalde display none yani mobil görünüm none gözükmesin demek oluyor
        padding: 10,
        ...clickEvent(),
        "&:hover": {
            transition: "color 0.1s",
            color: ({
                props
            }) => props.colors.primary,
            cursor: "pointer"
        },
        "@media screen and (max-width: 950px)": { //! bu da şu demek oluyor 950px e kadar display block özelliğinde gözüksün mobile olarak ama 950 den büyük olursa tekrardan none olsun demek
            display: "block"
        }
    },
    button: {
        padding: ({
            props
        }) => `${props.spaces.container / 4}px !important`,
        "&:hover span": {
            color: ({
                props
            }) => `${props.colors.primary} !important`
        }
    }
}, {
    name: "Menu-Component"
});
export default useStyles;