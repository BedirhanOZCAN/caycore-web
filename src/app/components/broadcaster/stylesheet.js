import {
    createUseStyles
} from "react-jss"


const useStyles = createUseStyles({
    broadcastersContainer: {
        justifyContent: "center", //? column iken burası dikeyde hizalama yapar
        flexDirection: "column", //! tablo gibi düşün yan yana sütunlar varmış gibi row da ise alt alta satırlar oluyor
        alignItems: "center", //? column iken burası yatayda hizalama yapar
        display: "flex",
        gap: "20px"
    },
    broadcastersContentContainer: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        "& span:nth-child(1)": {
            fontFamily: "inter_18pt-Bold",
            marginBottom: "10px",
            fontSize: "24px"
        },
        "& span:nth-child(2)": {
            fontFamily: "inter_18pt-Medium",
            fontSize: "18px",
            color: "#737373"
        }
    },
    broadcastersProfilePhoto: {
        borderRadius: "50%",
        height: "150px",
        width: "150px"
    }

}, {
    name: "Broadcaster-Component"
});
export default useStyles;