import React from "react";
import DownloadStore from "../Home/DownloadStore/DownloadStore";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/Header/Header";
import Banner from "./Banner.js/Banner";
import FAQsInfo from "./FAQsInfo/FAQsInfo";
import HelpCenter from "./HelpCenter/HelpCenter";

const FAQs = () => {
    return(
        <div className="wrapper">
            <Header/>
            <Banner/>
            <HelpCenter/>
            <FAQsInfo/>
            <DownloadStore/>
            <Footer/>
        </div>
    )
}
export default FAQs;