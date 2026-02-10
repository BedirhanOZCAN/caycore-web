import React from "react";
import { Footer } from "../../components";

const Contact = ({
    isMainFooterVisible
}) => {
    return <div>
        İletişim sayfasıııııııı
        <Footer
            isVisible={!isMainFooterVisible}
            isSticky={false}
        />
    </div>;
};
export default Contact;