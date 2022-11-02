import React, { useEffect, useRef, useState } from "react";
import "./popup.scss";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL, list } from "firebase/storage";
function Popup({ open, close }) {
  const popup = useRef();
  const box = useRef();
  const inside = useRef();
  const image = useRef();
  const [imgSrc, setImgSrc] = useState("");
  const [imgNum, setImgNum] = useState(1);
  const [imgMax, setImgMax] = useState();
  const ClosePopup = (e) => {
    console.log("close");
    inside.current.classList.remove("inside-adjust");
    close(false);
    setImgSrc("");
  };
  const InsideClick = (e) => {
    e.stopPropagation();
    console.log(imgMax);
    inside.current.classList.add("inside-loading");
    image.current.classList.remove("image-show");
    if (imgMax === imgNum) {
      const imageRef = ref(storage, `${open.name}/${open.name}1.jpeg`);
      setImgNum(2);
      getDownloadURL(imageRef).then((url) => {
        inside.current.classList.remove("inside-loading");
        setImgSrc(url);
      });
      return;
    }
    const imageRef = ref(storage, `${open.name}/${open.name}${imgNum}.jpeg`);
    setImgNum(imgNum + 1);
    getDownloadURL(imageRef).then((url) => {
      setImgSrc(url);
    });
  };

  const FinishLoading = (e) => {
    console.log(e);
    inside.current.classList.remove("inside-loading");
    image.current.classList.add("image-show");
    inside.current.style.setProperty(
      "--height",
      `${image.current.getBoundingClientRect().height}px`
    );
    inside.current.style.setProperty(
      "--width",
      `${image.current.getBoundingClientRect().width}px`
    );
    console.log("loading Finish");
  };
  useEffect(() => {
    if (!open.open) {
      popup.current.classList.remove("popup-show");
      inside.current.classList.remove("inside-show");
      return;
    }
    image.current.classList.remove("image-show");
    inside.current.classList.add("inside-loading");
    const totalHeight = document.body.scrollHeight;
    popup.current.style.height = `${totalHeight}px`;

    popup.current.classList.add("popup-show");
    inside.current.classList.add("inside-show");
    const imageCount = ref(storage, `${open.name}/`);
    list(imageCount).then((images) => {
      setImgMax(images.items.length + 1);
    });
    const imageRef = ref(storage, `${open.name}/${open.name}${imgNum}.jpeg`);
    setImgNum(imgNum + 1);
    getDownloadURL(imageRef)
      .then((url) => {
        setImgSrc(url);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      setImgNum(1);
    };
  }, [open]);
  return (
    <div className="popup" ref={popup}>
      <div
        className="popup__box"
        ref={box}
        onClick={(e) => {
          ClosePopup(e);
        }}
        onMouseEnter={() => {
          console.log("mouseenter");
        }}
      >
        <div
          className="popup__box-insidebox"
          ref={inside}
          onClick={(e) => {
            InsideClick(e);
          }}
        >
          <img
            src={imgSrc}
            alt={imgSrc}
            className="popup__box-insidebox__image"
            ref={image}
            onLoad={(e) => {
              FinishLoading(e);
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Popup;
