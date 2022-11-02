import React, { useEffect } from "react";
import "./imagepopup.scss";
function ImagePopUp({ imageShow, setImageShow }) {
  const closeHandler = () => {
    setImageShow(false);
  };
  useEffect(() => {
    if (imageShow) {
      const popup = document.querySelector(".imagepopup");
      const popupcontainer = document.querySelector(".imagepopup__container");

      popup.style.setProperty(
        "--top",
        `${window.pageYOffset + window.innerWidth / 20}px`
      );
      popup.classList.add("showimage");
      popupcontainer.classList.add("showcontainer");
    } else {
      const popupcontainer = document.querySelector(".imagepopup");
      popupcontainer.classList.remove("showimage");
      popupcontainer.classList.remove("showcontainer");
    }
  }, [imageShow]);
  return (
    <div className="imagepopup">
      <div className="imagepopup__container">
        <div
          onClick={() => {
            closeHandler();
          }}
        >
          X
        </div>
      </div>
    </div>
  );
}

export default ImagePopUp;
