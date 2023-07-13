import "./Modal.scss";
import check from "../public/images/icon-success.svg";

function Modal({ email }: { email: string }) {
  const dismiss = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const element = document.querySelector(
      "#modal-container"
    ) as HTMLDivElement;
    element.style.opacity = "0";
    element.style.zIndex = "-1";
    element.style.display = "none";
    const app = document.querySelector("#app") as HTMLDivElement;
    app.style.opacity = "1";
  };

  return (
    <div id="modal">
      <div>
        <img src={check} alt="" />
      </div>
      <div>
        <h1>Thanks for subscribing!</h1>
      </div>
      <div>
        <p>
          A confirmation email has been sent to <b>{email}</b>. PLease open it
          and click the button inside to confirm your subscription.{" "}
        </p>
      </div>
      <button onClick={dismiss}>Dismiss message</button>
    </div>
  );
}

export default Modal;
