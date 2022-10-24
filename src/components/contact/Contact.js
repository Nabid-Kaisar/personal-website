import { CONTACT } from "../../common/constants/CONSTANTS";
import { useState } from "react";

const initialState = {
  email: "",
};

export default function Contact() {
  const [email, setEmail] = useState(initialState.email);

  const handleEmailChange = (e) => {
    const { value: email } = e.target;
    setEmail(email);
  };

  const handleClearForm = () => {
    setEmail(initialState.email);
  };

  const handleFormSubmit = () => {
    const reqBody = {
      email,
    };
    console.log(reqBody);
  };

  return (
    <>
      <article>
        <section>
          <header>Get In Touch With Me:</header>
          <ul>
            <li>Phone: {CONTACT.phone}</li>
            <li>Email: {CONTACT.email}</li>
          </ul>
        </section>

        <section>
          <header style={{ fontSize: "1rem" }}> Book a meeting: </header>
          <fieldset>
            <legend>Enter Your Info</legend>
            <label>Your email ID: </label>
            <input
              value={email}
              onChange={handleEmailChange}
              name="email"
              type={"text"}
            />
            <br />
            <button name="submit" onClick={handleFormSubmit} className="mr5">
              Submit
            </button>
            <button name="clear" onClick={handleClearForm}>
              Clear
            </button>
          </fieldset>
        </section>
      </article>
    </>
  );
}
