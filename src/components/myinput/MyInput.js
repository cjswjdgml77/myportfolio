import React, { useEffect, useRef, useState } from "react";
import "./myinput.scss";
function MyInput({
  placeholder,
  dispatch,
  validate,
  type,
  setValidate,
  value,
}) {
  const myInput = useRef(null);
  const [myValue, setMyValue] = useState();
  useEffect(() => {
    if (!validate) {
      myInput.current.classList.remove("myinput__valid");
      myInput.current.classList.add("myinput__valid-false");
    } else {
      myInput.current.classList.remove("myinput__valid-false");
    }
  }, [placeholder]);
  const inputChangeHandler = (e) => {
    if (e.target.value.length > 2) {
      setValidate(true);
      myInput.current.classList.add("myinput__valid");
    } else {
      myInput.current.classList.remove("myinput__valid");
    }
    dispatch({ type: type, value: e.target.value });
  };
  return (
    <div className="myinput myinput__focus">
      <input
        className="myinput__input"
        type="text"
        required
        onChange={(e) => {
          inputChangeHandler(e);
        }}
        name={type}
        value={value}
      />
      <div className="myinput__letterbox" ref={myInput}>
        {placeholder.map((letter, idx) => (
          <span key={idx} style={{ "--delay": `${idx * 100}ms` }}>
            {letter}
          </span>
        ))}
      </div>

      {/* <label className="myinput__label" ref={mylabel}>
        {placeholder ? placeholder : "Name"}
      </label> */}
    </div>
  );
}

export default MyInput;
