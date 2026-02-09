import {
    // useNCoreLocalization,
    // Button,
    useNCoreTheme
} from "ncore-web"
import useStyles from "./stylesheet";
import {
    // useNavigate
} from "react-router-dom"
import Menu from "../menu";



const Header = (
    { menuData }
) => {
    const classes = useStyles();

    // const {
    //     activeLocale,
    //     localize,
    //     switchLocale
    // } = useNCoreLocalization();

    // const navigate = useNavigate();

    const {
        colors
    } = useNCoreTheme();


    return <div
        className={classes.container}
    >
        <div
            className={classes.contentContainer}
            style={{
                backgroundColor: colors.layer1
            }}
        >
            <div
                className={classes.titleContainer}
                onClick={() => {
                    window.location.href = '/'
                }}
            >
                <img
                    src="./assets/images/logo192.jpg"
                    className={classes.logo}
                    alt=""
                />
                <div className={classes.siteDescriptionContainer}>
                    <span
                        style={{
                            color: colors.primary
                        }}
                    >
                        Çay Core
                    </span>
                    <span
                        style={{
                            color: colors.slogan
                        }}
                    >
                        Code demleyelim...
                    </span>
                </div>
            </div>
            <Menu
                data={menuData}
            />
        </div>
    </div>
};
export default Header;



/* 


 <div
                className={classes.container}
            >
                {
                    MENU.map((item) => {
                        return <Button
                            title={localize(item.key)}
                            variant={window.location.pathname === item.path ? "filled" : "outline"}
                            onClick={() => {
                                navigate(item.path)
                            }}
                        />
                    })
                }
                <Button
                    title={activeLocale}
                    onClick={() => {
                        switchLocale(activeLocale === "tr" ? "en" : "tr")
                    }}
                />
            </div>;



*/