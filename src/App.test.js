import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("renders App", () => {
  render(<App />);
});

test("renders placeholder search input", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Search movies...");
  expect(inputElement).toBeInTheDocument();
});
