import React, {
    useEffect,
    useRef
} from "react";
import useStyles from "./stylesheet";
import sideMenuController from "./events";
import { Button, useNCoreTheme, useNCoreLocalization } from "ncore-web";
import { useNavigate } from "react-router-dom";

const SideMenu = ({
    sideData
}) => {

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

    const menuRef = useRef();

    useEffect(() => {
        const onActiveChanged = ({ state }) => {
            if (state.isActive) menuRef.current.classList.add("isActive");
            else menuRef.current.classList.remove("isActive");
        };
        sideMenuController.addEventListener("setIsActive", onActiveChanged);
        return () => {
            sideMenuController.removeEventListener("setIsActive", onActiveChanged);
        };
    }, []);

    const {
        localize
    } = useNCoreLocalization();

    const navigate = useNavigate();

    const selectedPage = window.location.pathname;

    return <div
        ref={menuRef}
        className={classes.container}
        id="side-menu"
    >
        <div
            className={classes.filter}
            onClick={() => {
                sideMenuController.emit("setIsActive", false)
            }}
        >
        </div>
        <div
            className={classes.menuContainer}
        >
            <div
                className={classes.menuHeaderContainer}
            >
                <span>
                    Menü
                </span>
                <i
                    className="fas fa-x"
                    onClick={() => {
                        sideMenuController.emit("setIsActive", false)
                    }}
                >

                </i>
            </div>
            <div className={`seperator ${classes.seperator}`}></div>
            {
                sideData.map((item, index) => {
                    return <Button
                        key={`menu-item-${index}`}
                        variant="ghost"
                        color={selectedPage === item.key ? "primary" : "body"}
                        title={localize(item.titleLocalizationKey)}
                        onClick={() => {
                            navigate(item.path)
                            sideMenuController.emit("setIsActive", false)
                        }}
                        style={{
                            padding: `${spaces.container / 2}px 0px`
                        }}
                        className={classes.button}
                    />
                })
            }
        </div>
    </div>
};
export default SideMenu;