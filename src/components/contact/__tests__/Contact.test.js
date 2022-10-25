import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../Contact";

import { CONTACT } from "../../../common/constants/CONSTANTS";

test("there should be a some static texts like header, email, phone", () => {
  render(<Contact />);

  // screen.getByRole("button", { name: /Submit/i });
  screen.getByText("Get In Touch With Me:");

  screen.getByText("Phone: " + CONTACT.phone);
  screen.getByText("Email: " + CONTACT.email);
});

test("there should be a some static texts like header, input, submit, clear button", () => {
  render(<Contact />);

  screen.getByText("Book a meeting:");
  screen.getByText("Enter Your Info");

  expect(screen.getByRole("button", { name: /Submit/i })).toHaveTextContent(
    "Submit!"
  );
  expect(screen.getByRole("button", { name: /clear/i })).toHaveTextContent(
    "Clear x"
  );

  screen.getByLabelText(/Your email ID:/);
  screen.getByRole("textbox");
});
