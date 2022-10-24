import { CONTACT } from "../../common/constants/CONSTANTS";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    const { value: email } = e.target;
    setEmail(email);
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
            <button onClick={handleFormSubmit}>Submit</button>
          </fieldset>
        </section>
      </article>
    </>
  );
}
