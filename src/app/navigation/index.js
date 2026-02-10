import {
    Routes,
    Route
} from "react-router-dom"
import HomePage from "../pages/home"
import AboutPage from "../pages/about"
import ContactPage from "../pages/contact"

const Navigation = ({
    isMainFooterVisible
}) => {
    return <Routes>
        <Route
            path="/"
            element={<HomePage
                isMainFooterVisible={isMainFooterVisible}
            />}
        />
        <Route
            path="/about"
            element={<AboutPage
                isMainFooterVisible={isMainFooterVisible}
            />}
        />
        <Route
            path="/contact"
            element={<ContactPage
                isMainFooterVisible={isMainFooterVisible}
            />}
        />
    </Routes>
};
export default Navigation;