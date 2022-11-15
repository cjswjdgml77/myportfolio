import React, { useEffect } from "react";
import "./australia.scss";

import { Sydney } from "../../assets/Sydney";
import { AirplaneModel } from "../../assets/AirplaneModel";
import { LightBeam } from "../../components/light/LightBeam";

function Australia() {
  useEffect(() => {
    // const australia = document.querySelector(".australia");
    // const pathEnter = document.querySelector(".australia__map");
    // const span = document.createElement("span");
    // australia.appendChild(span);
    // pathEnter.childNodes.forEach((path) => {
    //   path.addEventListener("mouseenter", (e) => {
    //     console.log(e);
    //     const targetPost = e.target.getBoundingClientRect();
    //     span.classList.remove("header__map-hidden");
    //     span.style.setProperty("--top", `${e.offsetY}px`);
    //     // span.style.setProperty(
    //     //   "--top",
    //     //   `${
    //     //     australia.offsetTop -
    //     //     window.scrollY +
    //     //     targetPost.top +
    //     //     targetPost.height / 2
    //     //   }px`
    //     // );
    //     span.style.setProperty("--left", `${e.offsetX}px`);
    //     span.classList.add("header__map-show");
    //     span.innerText = e.target.getAttribute("title");
    //   });
    //   path.addEventListener("mousemove", (e) => {
    //     span.style.setProperty("--top", `${e.offsetY}px`);
    //     span.style.setProperty("--left", `${e.offsetX}px`);
    //   });
    //   path.addEventListener("mouseleave", (e) => {
    //     console.log("leave");
    //     const targetPost = e.target.getBoundingClientRect();
    //     //span.classList.add("header__map-hidden");
    //   });
    // });
  });
  return (
    <div className="australia">
      <div className="australia__title">
        <span style={{ "--delay": "4100ms" }}>I</span>
        <span style={{ "--delay": "4200ms" }}>'</span>
        <span style={{ "--delay": "4300ms" }}>m</span>
        <span style={{ "--delay": "4400ms" }}>i</span>
        <span style={{ "--delay": "4500ms" }}>n</span>
        <span style={{ "--delay": "4600ms" }}>A</span>
        <span style={{ "--delay": "4700ms" }}>u</span>
        <span style={{ "--delay": "4800ms" }}>s</span>
        <span style={{ "--delay": "4900ms" }}>t</span>
        <span style={{ "--delay": "5000ms" }}>r</span>
        <span style={{ "--delay": "5100ms" }}>a</span>
        <span style={{ "--delay": "5200ms" }}>l</span>
        <span style={{ "--delay": "5300ms" }}>i</span>
        <span style={{ "--delay": "5400ms" }}>a</span>
      </div>
      <div className="australia__subtitle">
        <p>Let's work together</p>
      </div>
      <div className="australia__airplane">
        <AirplaneModel />
      </div>
      <div className="australia__box">
        {/* <AustraliaMap /> */}
        <Sydney />
      </div>
      <div className="australia__lightbox">
        {/* <div className="australia__lightbox-left">
          <LightBeam vividcolor={"#00a4ef"} />
          <LightBeam vividcolor={"#e89d41"} />
        </div>
        <div className="australia__lightbox-right">
          <LightBeam vividcolor={"#fd4084"} />

          <LightBeam vividcolor={"#735cb0"} />
        </div> */}
      </div>
    </div>
  );
}

export default Australia;
