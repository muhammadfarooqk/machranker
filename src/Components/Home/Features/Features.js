import React from "react";
import { Image } from "react-bootstrap";
import featuresimg from "../../../assets/images/features-img.png";
import featuresimgone from "../../../assets/images/features-img-one.svg";
import featuresimgtwo from "../../../assets/images/features-img-two.svg";
import featuresimgthree from "../../../assets/images/features-img-three.svg";
import featuresimgfour from "../../../assets/images/features-img-four.svg";
import featuresimgfive from "../../../assets/images/features-img-five.svg";

const Features = () => {
    return (
        <div className="features">
            <div className="container-width">
                <div className="features-heading text-center">
                    <h6>Key Features</h6>
                    <h3>Match and Rank Songs</h3>
                    <p className="mb-0">Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus, consequat eget justo in, semper gravida enim. Donec ultrices varius ligula. Ut non pretium augue. Etiam non rutrum metus. In varius sit amet lorem tempus sagittis.</p>
                </div>
                <div className="features-img-wrapper position-relative">
                    <div className="features-img text-center">
                        <Image src={featuresimg} fluid />
                    </div>
                    <div className="features-content-one position-absolute d-flex align-items-center justify-content-end">
                        <div className="features-content-one-img me-3">
                            <Image src={featuresimgone} fluid />
                        </div>
                        <p>Rank the Song</p>
                    </div>
                    <div className="features-content-two position-absolute d-flex align-items-center justify-content-end">
                        <div className="features-content-one-img me-3">
                            <Image src={featuresimgtwo} fluid />
                        </div>
                        <p>Get More Points</p>
                    </div>
                    <div className="features-content-three position-absolute d-flex align-items-center justify-content-end">
                        <div className="features-content-one-img me-3">
                            <Image src={featuresimgthree} fluid />
                        </div>
                        <p>Enjoy Music</p>
                    </div>
                    <div className="features-content-four position-absolute d-flex align-items-center">
                        <p className="me-3">Select your Favorite song</p>
                        <div className="features-content-one-img">
                            <Image src={featuresimgfour} fluid />
                        </div>
                    </div>
                    <div className="features-content-five position-absolute d-flex align-items-center">
                        <p className="me-3">Match the Song</p>
                        <div className="features-content-one-img">
                            <Image src={featuresimgfive} fluid />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features;