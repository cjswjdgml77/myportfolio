import React, { useEffect, useState } from "react";
import Airplane from "../../components/airplane/Airplane";
import ImagePopUp from "../../components/imagepopup/ImagePopUp";
import "./mytimeline.scss";
function MyTimeLine() {
  const [imageShow, setImageShow] = useState(false);
  const yearClick = (e) => {
    const clickYearDiv = document.querySelector(".mytimeline__clickyears");
    const mytimeline = document.querySelector(".mytimeline");
    const mytimelinePos = mytimeline.getBoundingClientRect();
    setImageShow(!imageShow);
    let span = e.target.children[0] ? e.target.children[0] : e.target;
    const spanPos = span.getBoundingClientRect();

    clickYearDiv.style.setProperty(
      "--yeartop",
      `${spanPos.top - mytimelinePos.top}px`
    );
    clickYearDiv.style.setProperty("--yearleft", `${spanPos.left}px`);
    clickYearDiv.style.setProperty("--yearwidth", `${spanPos.width}px`);
    clickYearDiv.style.setProperty("--yearheight", `${spanPos.height}px`);
    if (clickYearDiv.classList.toString().includes("scaleyears")) {
      clickYearDiv.classList.remove("scaleyears");
    }
    clickYearDiv.classList.add("scaleyears");
  };
  const adujstContent = () => {
    const contentTopDiv = document.querySelectorAll(".mytimeline__top-content");
    contentTopDiv.forEach((content, idx) => {
      const contentWidth = content.getBoundingClientRect().width;
      const contentHeight = content.getBoundingClientRect().height;
      content.style.setProperty(
        "--parentwidth",
        `-${contentWidth / 2 + contentHeight}px`
      );
      content.style.setProperty("--mywidth", `${contentWidth / 2}px`);
      content.style.setProperty("--delay", `${idx}s`);

      content.addEventListener("click", yearClick);
    });

    const contentBottomDiv = document.querySelectorAll(
      ".mytimeline__bottom-content"
    );

    for (let i = 1; i < contentBottomDiv.length; i += 1) {
      const contentWidth = contentBottomDiv[i].getBoundingClientRect().width;
      const contentHeight = contentBottomDiv[i].getBoundingClientRect().height;

      contentBottomDiv[i].style.setProperty(
        "--parentwidth",
        `${contentWidth / 2 + contentHeight}px`
      );
      contentBottomDiv[i].style.setProperty(
        "--mywidth",
        `${contentWidth / 2}px`
      );
      contentBottomDiv[i].style.setProperty("--delay", `${i / 2}s`);

      contentBottomDiv[i].addEventListener("click", yearClick);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      adujstContent();
    });
    adujstContent();
  }, []);
  return (
    <div>
      <div className="mytimeline">
        <Airplane />
        <div className="mytimeline__line"></div>
        <div className="mytimeline__coverline"></div>
        <div className="mytimeline__clickyears"></div>
        <div className="mytimeline__clickinfo">
          <span>Click on the year to find out more!</span>
        </div>
        <div className="mytimeline__top">
          <div className="mytimeline__top-content first">
            <span className="mytimeline__top-content__year">1993</span>
          </div>
          <div className="mytimeline__top-content second">
            <span className="mytimeline__top-content__year">1993</span>
          </div>
          <div className="mytimeline__top-content third">
            <span className="mytimeline__top-content__year">1993</span>
          </div>
          <div className="mytimeline__top-content forth">
            <span className="mytimeline__top-content__year">1993</span>
          </div>
          <div className="mytimeline__top-content fifth">
            <span className="mytimeline__top-content__year">1993</span>
          </div>
        </div>
        <div className="mytimeline__middle"></div>
        <div className="mytimeline__bottom">
          <div className="mytimeline__bottom-content"></div>
          <div className="mytimeline__bottom-content first">
            <span className="mytimeline__bottom-content__year">1993</span>
          </div>
          <div className="mytimeline__bottom-content"></div>
          <div className="mytimeline__bottom-content second">
            <span className="mytimeline__bottom-content__year">1993</span>
          </div>
          <div className="mytimeline__bottom-content"></div>
          <div className="mytimeline__bottom-content third">
            <span className="mytimeline__bottom-content__year">1993</span>
          </div>
          <div className="mytimeline__bottom-content"></div>
          <div className="mytimeline__bottom-content forth">
            <span className="mytimeline__bottom-content__year">1993</span>
          </div>
          <div className="mytimeline__bottom-content"></div>
          <div className="mytimeline__bottom-content fifth">
            <span className="mytimeline__bottom-content__year">1993</span>
          </div>
        </div>
      </div>
      <ImagePopUp imageShow={imageShow} setImageShow={setImageShow} />
    </div>
  );
}

export default MyTimeLine;
