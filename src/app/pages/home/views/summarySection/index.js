import React from "react";
import useStyles from "./stylesheet";
import {
    Button
} from "ncore-web"

const SummarySeciton = () => {

    const classes = useStyles()

    return <div
        className={classes.container}
    >
        <span
            className={classes.title}
        >
            Çay Core Nedir?
        </span>
        <div
            className={classes.contentContainer}
        >
            <img
                src="assets/images/logo192.jpg"
                className={classes.image}
                alt=""
            />
            <p>
                Çay Core; NIBGAT | Topluluğunun üretmiş olduğu bir
                projedir. Proje kapsamı olarak "yayıncılık" ifade etmektedir.
                Çeşitli sosyal medya ve yayıncılık araçları ile
                NİBGAT | Çekirdek ve NIBGAT | Topluluk faaliyetlerinin ekip içi görünümünün de yer aldığı,
                samimi ve tamamı ile ekibin yer aldığı bir ortam.
                Çeşitli etkinlikler, eğitimler, oyunlar, yazılım geliştirme faaliyetlerinin yapıldığı
                hatta açık kaynak olarak sunulduğu bir yerdir.
                Resmi faaliyetlerden daha ziyade NİBGAT'ın
                kamera arkası olarak da nitelendirilebilir
            </p>
        </div>

    </div>;
};

export default SummarySeciton;