import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { wait } from "@testing-library/user-event/dist/utils";
import { act, Simulate } from "react-dom/test-utils";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders 'Hello World' as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // .. here is nothing

    // Assert
    const helloWorldElement = screen.getByText("hello world", { exact: false }); // get element ref by the text rendered inside it
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // .. here is nothing

    // Assert
    const outputElement = screen.getByText(/good to see you/i);
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", async () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // act(() => {
    //   Simulate.click(button);
    // });

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert
    const outputElement = screen.queryByText(/good to see you/i);
    // expect(outputElement).not.toBeInTheDocument();
    expect(outputElement).toBeNull();
  });
});
