import React from "react";
import About from "./About/About";
import Analytics from "./Analytics/Analytics";
import Banner from "./Banner/Banner";
import Download from "./Download/Download";
import DownloadStore from "./DownloadStore/DownloadStore";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Home = () => {
    return(
        <div className="wrapper">
            <Header/>
            <Banner/>
            <About/>
            <Analytics/>
            <Features/>
            <Download/>
            <DownloadStore/>
            <Footer/>
        </div>
    )
}
export default Home;