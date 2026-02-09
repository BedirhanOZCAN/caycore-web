import React from "react";
import useStyles from "./stylesheet";
import {
    Button
} from "ncore-web"

const WelcomeSeciton = () => {


    const classes = useStyles()

    return <div
        className={classes.container}
    >
        <div
            className={classes.filter}
        >
            <div
                className={classes.contentContainer}
            >
                <span
                    className={classes.title}
                >
                    Sıfırdan Geliştirici Olmak
                </span>
                <span
                    className={classes.content}
                >
                    Her hafta Cumartesi günü akşam saat 19:00 - 21:00 arası "Sıfırdan Geliştirici Olmak" konulu eğitimimiz düzenlenmektedir.
                    Sizleri de aramızda görmekten memnuniyet duyarız.
                </span>
                <Button
                    variant="filled"
                    title="Eğitime Git"
                    onClick={() => {
                        
                    }}
                />
            </div>

        </div>

    </div>;
};

export default WelcomeSeciton;