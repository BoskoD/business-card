import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return(
     <div className="footer">
         <div class="social-container">
            <a className="insta social">
                <FontAwesomeIcon  icon={faInstagram} size="lg"/>
            </a>
            <a className="fb social">
                <FontAwesomeIcon  icon={faFacebook} size="lg"/>
            </a>
            
            <a className="linked social" >
                <FontAwesomeIcon icon={faLinkedin} size="lg"/>
            </a>

            <a className="twitter social">
                <FontAwesomeIcon  icon={faTwitter} size="lg"/>
            </a>
         </div>
     </div>
    )
}