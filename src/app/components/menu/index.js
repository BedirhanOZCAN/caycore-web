import {
    Button,
    useNCoreLocalization,
    useNCoreTheme,
} from "ncore-web"
import {
    useNavigate
} from "react-router-dom";
import useStyles from "./stylesheet";
import sideMenuController from "../sideMenu/events";

const Menu = (
    { data } // ! bu şekilde süslüye alma sebebimiz constantstan gelen veriler bir obje ile sarılmış halde geliyor ve react buna props adını vermiş bu props objesinin içinden sabitleri alabilmek için destructing yapmamız lazım bu da o demek oluyor böyle yapmasaydık
) => {  //! süslü olarak vermeseydik datayı map ile kullanabilmemiz için props.data.map şeklinde yazmamız gerekirdi

    const navigate = useNavigate();



    const {
        localize
    } = useNCoreLocalization();

    const {
        colors,
        spaces
    } = useNCoreTheme();

    const classes = useStyles({
        props: {
            colors,
            spaces
        }
    });


    const selectedPage = window.location.pathname;

    return <div
        className={classes.container}
    >
        <div className={classes.webAndDesktopContainer}>
            {
                data.map((item, index) => {
                    return <Button
                        key={`menu-item-${index}`}
                        variant="ghost"
                        color={selectedPage === item.key ? "primary" : "body"}
                        title={localize(item.titleLocalizationKey)}
                        onClick={() => {
                            navigate(item.path)
                        }}
                        style={{
                            padding: spaces.container / 2
                        }}
                        className={classes.button}
                    />
                })
            }
        </div>
        <div
            className={classes.mobileContainer}
            onClick={() => {
                sideMenuController.emit("setIsActive")
            }}
        >
            <i className="fas fa-bars fa-xl"></i>
        </div>
    </div>

};
export default Menu;