import React from "react";
import AboutSection from "./AboutSection";
import InfoSection from "./InfoSection";

export default function Body() {
    return(
        <div className="rectangle91">
            <h2>Bosko Danilovic</h2>
            <h3>Software Developer</h3>
            <h4>boskodanilovic.net</h4>

            <button className="btn1">
                <p className="emailText">Email</p>
            </button>

            <div className="Description">
                <AboutSection/>
                <br/>
                <InfoSection/>
            </div>
        </div>
    )
   
}