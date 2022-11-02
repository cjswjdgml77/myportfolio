import React, { useRef, useEffect, useReducer, useState } from "react";
import { ManDeveloping } from "../../assets/mandeveloping";
import { ManWearingBlazer } from "../../assets/ManWearingBlazer";
import { RiMailCheckLine, RiMailLine, RiMailCloseLine } from "react-icons/ri";
import Navbar from "../navbar/Navbar";
import "./contact.scss";
import { ArrowRight } from "../../assets/arrowright";
import MyInput from "../../components/myinput/MyInput";
import emailjs from "@emailjs/browser";
import env from "react-dotenv";
function Contact() {
  const form = useRef();
  const textArea = useRef();
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.value };
      case "email":
        return { ...state, email: action.value };
      case "subject":
        return { ...state, subject: action.value };
      case "reset":
        return { name: "", email: "", subject: "", message: "" };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const [validateName, setValidateName] = useState(true);
  const [validateEmail, setValidateEmail] = useState(true);
  const [validateSubject, setValidateSubject] = useState(true);
  const [mailFailed, setMailFailed] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const sendBtnHandler = (e) => {
    let falseCount = 0;
    if (!state.name) {
      setValidateName(false);
      falseCount += 1;
    }
    if (!state.subject) {
      setValidateSubject(false);
      falseCount += 1;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)) {
      setValidateEmail(false);
      falseCount += 1;
    }
    if (!textArea.current.value) {
      textArea.current.classList.add("textvalid");
      falseCount += 1;
    }
    if (falseCount !== 0) {
      setEmailSuccess(false);
      setMailFailed(true);
      return;
    }
    emailjs
      .sendForm(
        env.J_SERVICE_ID,
        env.J_TEMPLATE_ID,
        form.current,
        env.J_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text !== "OK") return;
          textArea.current.value = "";
          dispatch({ type: "reset" });
          setEmailSuccess(true);
          setMailFailed(false);
        },
        (error) => {
          setEmailSuccess(false);
          setMailFailed(true);
        }
      );
  };

  const textAreaHandler = (e) => {
    if (e.target.value.length > 0 && e.target.classList[0])
      e.target.classList.remove("textvalid");
  };
  useEffect(() => {
    setTimeout(() => {
      const outerior = document.querySelector(".contact__contactme-outerior");
      outerior.classList.add("slide");
    }, 100);
  }, []);
  return (
    <div className="contact">
      <div className="contact__contactme">
        <div className="contact__contactme-man">
          <ManWearingBlazer />
        </div>
        <div className="contact__contactme-outerior">
          <div className="contact__contactme-outerior__buttons">
            {/* <button>helo</button>
            <button>ll</button> */}
          </div>
          <div className="contact__contactme-outerior__inside">
            <div className="contact__contactme-outerior__inside-left">
              <div>{/* <h1>H1, there!</h1> */}</div>
            </div>
            <div className="contact__contactme-outerior__inside-right">
              <form
                className="contact__contactme-outerior__inside-right__emailform"
                ref={form}
              >
                <div className="contact__contactme-outerior__inside-right__emailform-namearea">
                  <MyInput
                    placeholder={["N", "a", "m", "e"]}
                    dispatch={dispatch}
                    validate={validateName}
                    type="name"
                    value={state.name}
                    setValidate={setValidateName}
                  />
                  <MyInput
                    placeholder={["E", "m", "a", "i", "l"]}
                    dispatch={dispatch}
                    validate={validateEmail}
                    type="email"
                    value={state.email}
                    setValidate={setValidateEmail}
                  />
                </div>
                {/* <input className="contact__contactme-outerior__inside-right__emailform-subject"></input> */}
                <MyInput
                  placeholder={["S", "u", "b", "j", "e", "c", "t"]}
                  dispatch={dispatch}
                  validate={validateSubject}
                  type="subject"
                  value={state.subject}
                  setValidate={setValidateSubject}
                />
                <div className="contact__contactme-outerior__inside-right__emailform-content">
                  <textarea
                    placeholder="Message"
                    ref={textArea}
                    onChange={(e) => {
                      textAreaHandler(e);
                    }}
                    name="message"
                  ></textarea>
                </div>
              </form>
              <div
                className="contact__contactme-outerior__inside-right__sendbtnbox"
                onClick={(e) => {
                  sendBtnHandler(e);
                }}
              >
                <button className="contact__contactme-outerior__inside-right__sendbtnbox-sendbtn"></button>
                <div className="contact__contactme-outerior__inside-right__sendbtnbox-senddiv">
                  <ArrowRight />
                </div>
                <div
                  className="contact__contactme-outerior__inside-right__sendbtnbox-senddiv"
                  style={{ "--i": "0.5s" }}
                >
                  <ArrowRight />
                </div>
                <div
                  className="contact__contactme-outerior__inside-right__sendbtnbox-senddiv"
                  style={{ "--i": "0.75s" }}
                >
                  <ArrowRight />
                </div>
                <div>
                  {emailSuccess ? (
                    <RiMailCheckLine
                      style={{ color: "green" }}
                      className="contact__contactme-outerior__inside-right__sendbtnbox-mail"
                    />
                  ) : mailFailed ? (
                    <RiMailCloseLine
                      style={{ color: "red" }}
                      className="contact__contactme-outerior__inside-right__sendbtnbox-mail wrong"
                    />
                  ) : (
                    <RiMailLine className="contact__contactme-outerior__inside-right__sendbtnbox-mail" />
                  )}
                </div>
                {/* <RiMailCheckLine
                  style={{
                    fontSize: "30px",
                    // position: "absolute",
                    // right: "10px",
                    // top: "25%",
                    // zIndex: "999",
                  }}
                  className="contact__contactme-outerior__inside-right__sendbtnbox-mail"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="contact__contactme-side"></div>
      </div>
    </div>
  );
}

export default Contact;
