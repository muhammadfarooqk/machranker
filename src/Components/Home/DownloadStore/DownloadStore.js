import React from "react";
import { Image } from "react-bootstrap";
import appstorelogo from "../../../assets/images/app-store-img.png"

const DownloadStore = () => {
    return (
        <div className="downloads-store-box">
            <div className="downloads-store-box-content d-flex align-items-center justify-content-between">
                <h3 className="mb-0">Get and Install Now</h3>
                <a href="/">
                    <div className="app-store-logo d-flex align-items-center justify-content-center">
                        <Image src={appstorelogo} fluid />
                    </div>
                </a>
            </div>
        </div>
    )
}
export default DownloadStore;