import { CONTACT } from "../../common/constants/CONSTANTS";
import {useEffect, useState} from "react";
import {LOREM_IPSUM} from "../../common/constants/LOREM_IPSUM"

const initialState = {
  email: "",
  isSubmitted: false,
};

export default function Contact() {
  const [email, setEmail] = useState(initialState.email);
  const [isSubmitted, setIsSubmitted] = useState(initialState.isSubmitted);

  // useEffect(()=>{
  //   throw new Error();
  // },[])

  const handleEmailChange = (e) => {
    const { value: email } = e.target;
    setEmail(email);
  };

  const handleClearForm = () => {
    setEmail(initialState.email);
    setIsSubmitted(initialState.isSubmitted);
  };

  const handleFormSubmit = () => {
    const reqBody = {
      email,
    };
    if (!reqBody.email) return;

    setIsSubmitted(true);
  };

  return (
    <>
      <main>
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
            <label htmlFor="email">Your email ID: </label>
            <input
              id="email"
              value={email}
              onChange={handleEmailChange}
              name="email"
              type={"text"}
            />
            <br />
            <button name="submit" onClick={handleFormSubmit} className="mr5">
              Submit!
            </button>
            <button name="clear" onClick={handleClearForm}>
              Clear x
            </button>
          </fieldset>
        </section>
        <section>
          <header>
            {isSubmitted &&
              "Your booking has been made! You will be notified via EMAIL."}
          </header>
        </section>
        <section>
          {[...Array(10).keys()].map(()=> LOREM_IPSUM)}
        </section>
      </main>
    </>
  );
}
