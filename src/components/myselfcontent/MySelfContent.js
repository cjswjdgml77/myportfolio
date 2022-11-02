import React, { useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import "./myselfcontent.scss";
function MySelfContent({ title, delay, content, link }) {
  const myselfcontent = useRef();
  useEffect(() => {
    setTimeout(() => {
      myselfcontent.current.classList.add("myselfcontent-show");
    }, 100);
  });
  return (
    <div
      style={{ "--delay": delay }}
      className="myselfcontent"
      ref={myselfcontent}
    >
      <div className="myselfcontent__box">
        <image></image>
        <h1 className="myselfcontent__box-title">{title}</h1>
        <p className="myselfcontent__box-content">{content}</p>
        <div className="myselfcontent__box-readmore">
          <a
            href={link}
            target="_blank"
            className="myselfcontent__box-readmore__link"
          >
            Read More
          </a>
          <BsArrowRight className="myselfcontent__box-readmore__arrow" />
        </div>
      </div>
    </div>
  );
}

export default MySelfContent;
