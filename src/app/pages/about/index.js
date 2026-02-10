import React from "react";
import { Footer } from "../../components";


const About = ({
    isMainFooterVisible
}) => {
    return <div>
        Hakkımızda sayfasına hoşgeldiniz.
        <Footer
            isVisible={!isMainFooterVisible}
            isSticky={false}
        />
    </div>
};
export default About;