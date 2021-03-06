import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import "../sass/socialFollow.scss";
export default function SocialFollow({ size, color }) {
  const sizesMap = {
    sm: "1x",
    md: "2x",
  };

  return (
    <div className="social-follow">
      <p className={"social-follow-text text-" + color}>
        @james<strong>q</strong>quick
      </p>
      <div className="flex justify-content-center">
        <a
          href="https://www.youtube.com/c/jamesqquick"
          className="youtube social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size={sizesMap[size]} />
        </a>
        {/* <a
          href="https://www.facebook.com/jamesqquick/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size={sizesMap[size]} />
        </a> */}
        <a
          href="https://www.twitter.com/jamesqquick"
          className="twitter social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size={sizesMap[size]} />
        </a>
        <a
          href="https://www.instagram.com/jamesqquick"
          className="instagram social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size={sizesMap[size]} />
        </a>
        <a
          href="https://www.twitch.tv/jamesqquick"
          className="twitch social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitch} size={sizesMap[size]} />
        </a>
        {/* <a
          href="https://www.linkedin.com/in/jamesqquick/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size={sizesMap[size]} />
        </a> */}
      </div>
    </div>
  );
}
