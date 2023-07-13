import "./App.scss";
import bg from "../public/images/illustration-sign-up-desktop.svg";
import bgMobile from "../public/images/illustration-sign-up-mobile.svg";
import iconList from "../public/images/icon-list.svg";
import { useRef, useState } from "react";
import Modal from "./Modal";

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const errorRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setEmail(value);
    if (value != "") {
      const pos = value.lastIndexOf(".");
      if (
        !value.includes("@") ||
        value[value.length - 1] == "." ||
        !value.slice(pos).includes(".")
      ) {
        setError("Incorrect Email format!");
      } else {
        setError("");
      }
    } else {
      setError("Empty Email field!");
    }
  };

  const handleSubmmit = () => {
    if (error == "" && inputRef.current!.value != "") {
      modalRef.current!.style.opacity = "1";
      modalRef.current!.style.zIndex = "2";
      modalRef.current!.style.display = "flex";
      const app = document.querySelector("#app") as HTMLDivElement;
      app.style.opacity = "0.25";
    } else {
      errorRef.current!.style.animation = "wiggle 250ms linear";
      setTimeout(() => (errorRef.current!.style.animation = "w"), 250);
    }
  };

  return (
    <>
      <div id="app">
        <div id="left">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>
              <img src={iconList} /> Product discovery and building what matters
            </li>
            <li>
              <img src={iconList} />
              Measuring to ensure updates are a success
            </li>
            <li>
              <img src={iconList} />
              And much more!
            </li>
          </ul>
          <div id="input">
            <label>Email address</label>
            <div
              onClick={() => {
                inputRef.current?.focus();
                const parent = document.querySelector(
                  "#input > div"
                ) as HTMLDivElement;
                console.log(parent);
                parent.style.border = "solid 1px black";
              }}
            >
              <input
                type="email"
                ref={inputRef}
                onChange={handleInput}
                onBlur={() => {
                  const parent = document.querySelector(
                    "#input > div"
                  ) as HTMLDivElement;
                  console.log(parent);
                  parent.style.border = "solid 1px grey";
                }}
                placeholder="email@company.com"
              />
            </div>
            <button onClick={handleSubmmit}>
              Subscribe to monthly newsletter
            </button>
            <div ref={errorRef} id="error">
              {error}
            </div>
          </div>
        </div>
        <div
          id="right"
          style={{
            backgroundImage: `url(${
              window.screen.width <= 416 ? bgMobile : bg
            })`,
          }}
        ></div>
      </div>
      <div id="modal-container" ref={modalRef}>
        <Modal email={email} />
      </div>
    </>
  );
}

export default App;
