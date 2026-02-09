import {
    createUseStyles
} from "react-jss"
import {
    clickEvent
} from "./themes/helpers";


const useStyles = createUseStyles((params) => {

    const props = params?.props || {};
    const colors = props.colors || {};


    return {
        container: {
            height: "100%",
            width: "100%"
        },
        "@global": {
            "@font-face": [
                {
                    "fontFamily": "inter_18pt-Bold",
                    "src": "url('/assets/fonts/Inter_18pt-Bold.ttf')"
                },

                {
                    "fontFamily": "inter_18pt-Light",
                    "src": "url('/assets/fonts/Inter_18pt-Light.ttf')"
                },

                {
                    "fontFamily": "inter_18pt-Medium",
                    "src": "url('/assets/fonts/Inter_18pt-Medium.ttf')"
                },

                {
                    "fontFamily": "inter_18pt-Regular",
                    "src": "url('/assets/fonts/Inter_18pt-Regular.ttf')"
                },

                {
                    "fontFamily": "inter_18pt-SemiBold",
                    "src": "url('/assets/fonts/Inter_18pt-SemiBold.ttf')"
                }
            ],
            "a": {
                ...clickEvent(props)
            },
            ".seperator": {
                display: "block",
                width: "100%",

                // Height ve Background yerine Border kullanıyoruz
                height: 0,
                borderBottom: `1px solid ${colors.seperator || "#999"}`,

                // Flexbox ayarları (Ezilmemesi için)
                flexShrink: 0,
                minHeight: 0 // Border kullandığımız için minHeight 0 olabilir
            }
        }
    }
}, {
    name: "Global"
});
export default useStyles;











// const useStyles = createUseStyles({
//     container: {
// backgroundColor: (props) => "white" //! bu şekilde kullanarak tema renklerini componentten prop olarak verip prop'u buradan kullanıyoruz. componentimiizn proplarını buraya aktarabiliyoruz
//         backgroundColor: "yellow"
//     }
// }, {
//     name: "Global"
// });
// export default useStyles;