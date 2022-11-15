import React, { useEffect } from "react";
import Airplane from "../../components/airplane/Airplane";
import "./contactme.scss";
function ContactMe() {
  const makeCopyLetter = () => {
    const copyrightLetter = [
      "D",
      "e",
      "v",
      "e",
      "l",
      "o",
      "p",
      "e",
      "d",
      "_",
      "b",
      "y",
      "_",
      "J",
      "e",
      "o",
      "n",
      "g",
      "h",
      "u",
      "i",
      "_",
      "C",
      "h",
      "e",
      "o",
      "n",
    ];
    const copyDiv = document.querySelector(".contactme__copyright");
    copyrightLetter.forEach((letter, idx) => {
      const letterSpan = document.createElement("span");
      letterSpan.innerHTML = letter;
      letterSpan.style.setProperty("--letterIdx", `${idx * 100}ms`);
      letterSpan.classList.add("contactme__copyright-letters");
      setTimeout(() => {
        copyDiv.appendChild(letterSpan);
      }, 500 + idx * 100);
    });
  };
  useEffect(() => {
    makeCopyLetter();
  });

  return (
    <div className="contactme">
      <Airplane />
      <p className="contactme__title">Get in Touch</p>
      <div className="contactme__email">
        <p className="contactme__email-content"></p>
        <div className="contactme__email-inputbox">
          <div className="contactme__email-inputbox__input">
            <span>cjswjdgml123@gmail.com</span>
          </div>
          <a
            className="contactme__email-inputbox__email"
            href="mailto:cjswjdgml123@gmail.com"
          >
            Message me !
          </a>
        </div>
      </div>
      <div className="contactme__copyright"></div>
    </div>
  );
}

export default ContactMe;
