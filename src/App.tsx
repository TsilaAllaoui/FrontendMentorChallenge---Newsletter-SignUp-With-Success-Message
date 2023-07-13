import "./App.scss";
import bg from "../public/images/illustration-sign-up-desktop.svg";
import iconList from "../public/images/icon-list.svg";
import { useRef, useState } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  const [error, setError] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    console.log(value);
    if (value != "") {
      if (
        !value.includes("@") ||
        value[value.length - 1] == "." ||
        !value.slice(value.length - 4).includes(".")
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
      console.log("PASS");
    } else {
      errorRef.current!.style.animation = "wiggle 250ms linear";
      setTimeout(() => (errorRef.current!.style.animation = "w"), 250);
    }
  };

  return (
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
            }}
          >
            <input type="email" ref={inputRef} onChange={handleInput} />
          </div>
          <button onClick={handleSubmmit}>
            Subscribe to monthly newsletter
          </button>
          <div ref={errorRef} id="error">
            {error}
          </div>
        </div>
      </div>
      <div id="right" style={{ backgroundImage: `url(${bg})` }}></div>
    </div>
  );
}

export default App;
