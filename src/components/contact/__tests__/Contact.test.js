import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../Contact";

import { CONTACT } from "../../../common/constants/CONSTANTS";

describe("There should be some static texts like", function () {
  test("header, email, phone with proper texts, phone number, email", () => {
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
});

const emailTestCases = ["himelkaisar023@gmail.com", "kaisar023@gmail.com"];

describe("User can", function () {
  test("clear texts inside input box using the clear btn", () => {
    render(<Contact />);

    const emailInput = screen.getByLabelText("Your email ID:");
    const clearBtn = screen.getByRole("button", { name: /clear/i });

    emailTestCases.forEach((email) => {
      userEvent.type(emailInput, email);
      userEvent.click(clearBtn);

      expect(emailInput.value).toBe("");
    });
  });

  test("change input properly inside email input box", () => {
    render(<Contact />);

    const emailInput = screen.getByLabelText("Your email ID:");
    const clearBtn = screen.getByRole("button", { name: /clear/i });

    for (let i = 0; i < emailTestCases.length; i++) {
      userEvent.type(emailInput, emailTestCases[i]);
      expect(emailInput.value).toBe(emailTestCases[i]);
      userEvent.click(clearBtn);
    }
  });

  test("submit with non-empty email which will show a text of 'Your booking has been made! You will be notified via EMAIL.' ", () => {
    render(<Contact />);

    const successText =
      "Your booking has been made! You will be notified via EMAIL.";

    const emailInput = screen.getByLabelText("Your email ID:");

    const submitBtn = screen.getByRole("button", { name: /submit/i });
    const clearBtn = screen.getByRole("button", { name: /clear/i });
    for (let i = 0; i < emailTestCases.length; i++) {
      userEvent.type(emailInput, emailTestCases[i]);
      userEvent.click(submitBtn);
      screen.getByText(successText);
      userEvent.click(clearBtn);
    }
  });

  test("submit with empty email which will not show a text of 'Your booking has been made! You will be notified via EMAIL.' ", () => {
    render(<Contact />);

    const successText =
      "Your booking has been made! You will be notified via EMAIL.";

    const emailInput = screen.getByLabelText("Your email ID:");

    const submitBtn = screen.getByRole("button", { name: /submit/i });
    const clearBtn = screen.getByRole("button", { name: /clear/i });
    for (let i = 0; i < emailTestCases.length; i++) {
      userEvent.type(emailInput, emailTestCases[i]);
      userEvent.click(submitBtn);
      screen.getByText(successText);
      userEvent.click(clearBtn);
    }
  });
});
