import React, { useState } from "react";
import { Blub } from "../../assets/bulb";
import { ManDeveloping } from "../../assets/mandeveloping";
import "./about.scss";
function About() {
  const [createDiv, setCreateDiv] = useState(false);
  const mouseEnterHandler = (e) => {
    const svgPath = document
      .querySelector(".svg__mandeveloping-path")
      .getBoundingClientRect();
    if (window.innerHeight < svgPath.height + svgPath.top) return;
    setCreateDiv(true);
    const backDiv = document.createElement("div");
    const body = document.getElementsByTagName("body")[0];
    const svgbar = document
      .querySelector(".svg__first-bar")
      .getBoundingClientRect();
    const bodyHeight = body.getBoundingClientRect().height;
    const wholeBottom = -window.pageYOffset;
    const svgPathBottom = wholeBottom + window.innerHeight - svgPath.bottom;
    const gradientPercentage =
      100 - ((window.innerHeight - svgbar.top) / bodyHeight) * 100;

    backDiv.style.setProperty("--gradientPercentage", `${gradientPercentage}%`);
    backDiv.style.setProperty("--svgbottom", `${svgPathBottom}px`);
    backDiv.style.setProperty("--svgwidth", `${svgPath.width}px`);
    backDiv.style.setProperty("--svgheight", `${svgPath.height}px`);
    backDiv.style.setProperty("--bottom", `${wholeBottom}px`);
    backDiv.style.setProperty(
      "--right",
      `${window.innerWidth - svgPath.right}px`
    );

    backDiv.style.setProperty("--height", `${bodyHeight}px`);
    backDiv.classList.add("about__bg");
    body.appendChild(backDiv);

    const leftContentBox = document.querySelector(".about__contentbox-left");
    const leftContentBoxPos = leftContentBox.getBoundingClientRect();
    const mybulb = document.querySelector(".about__bulb");
    mybulb.classList.add("myblubanimation");
    // leftContentBox.style.setProperty(
    //   "--topPos",
    //   `-${leftContentBoxPos.top - 20}px`
    // );
    // leftContentBox.classList.add("leftlight");
  };
  const mouseLeaveHandler = (e) => {
    if (!createDiv) return;
    const backdiv = document.querySelectorAll(".about__bg");
    if (!backdiv) return;
    backdiv.forEach((element) => {
      element.remove();
    });
    setCreateDiv(false);
  };
  return (
    <div className="about">
      <div className="about__contentbox">
        <div className="about__contentbox-left">
          <Blub />
          <p>dsfdsafdsafdsavcxzvcxzv</p>
        </div>
        <div
          className="about__contentbox-right"
          onMouseEnter={(e) => {
            mouseEnterHandler(e);
          }}
          onMouseLeave={(e) => {
            mouseLeaveHandler(e);
          }}
        >
          <ManDeveloping />
        </div>
      </div>
    </div>
  );
}

export default About;
