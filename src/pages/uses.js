import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function uses() {
  return (
    <Layout>
      <SEO
        title="Uses"
        keywords={[`Uses`, `web development`, `web design`, `developer tools`]}
      />
      <div className="container">
        <h1 className="title">What I Use</h1>
        <hr className="title-underline" />
        <p>
          I get lots of questions about what kind of hardware, software, desk
          setup, etc. that I use. Well, here ya go!
        </p>
        <h2>Software</h2>
        <ul>
          <li>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Studio Code
            </a>{" "}
            with the Cobalt 2 theme by Wes Bos
          </li>
          <li>
            <a
              href="https://hyper.is/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hyper Terminal
            </a>
          </li>
          <li>
            <a
              href="https://www.techsmith.com/screen-capture.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Snagit
            </a>{" "}
            for some screenshots and gifs
          </li>
          <li>
            <a
              href="https://www.telestream.net/screenflow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Screenflow
            </a>{" "}
            for video recording/editing
          </li>
          <li>
            <a
              href="https://trello.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trello
            </a>{" "}
            for tracking my work (like a kanban board)
          </li>
          <li>
            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </a>{" "}
            and{" "}
            <a
              href="https://www.sketch.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sketch
            </a>{" "}
            for design
          </li>
          <li>
            <a
              href="https://github.com/tonsky/FiraCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fira Code Font
            </a>
            - it's free!
          </li>
        </ul>
        <h2>Hardware</h2>
        <ul>
          <li>2018 15 Inch Macbook Pro - 16gb ram, 500gb ssd</li>
          <li>adjustable (crank) desk from Ikea</li>
        </ul>
        <h2>Recording Setup</h2>
        <ul>
          <li>
            <a
              href="https://www.amazon.com/Shure-SM7B-Cardioid-Dynamic-Microphone/dp/B0002E4Z8M"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shure SM7B Microphone
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/PSA-Swivel-Mount-Studio-Microphone/dp/B001D7UYBO"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rode Swivel Boom Arm
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/Logitech-Widescreen-Calling-Recording-Desktop/dp/B006JH8T3S"
              target="_blank"
              rel="noopener noreferrer"
            >
              Logitech C920 Webcam
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/Canon-Mirrorless-Camera-EF-M15-45mm-Video/dp/B079Y45KTJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canon M50 Camera
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
