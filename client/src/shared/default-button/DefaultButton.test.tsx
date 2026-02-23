import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { DefaultButton } from "./index";

describe("DefaultButton", () => {
  it("renders children correctly", () => {
    render(<DefaultButton>Click me</DefaultButton>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("has default type of 'button'", () => {
    render(<DefaultButton>Submit</DefaultButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "button");
  });

  it("accepts type='submit'", () => {
    render(<DefaultButton type="submit">Submit</DefaultButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
  });

  it("always applies the 'default-button' CSS class", () => {
    render(<DefaultButton>Label</DefaultButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("default-button");
  });

  it("appends a custom className alongside 'default-button'", () => {
    render(<DefaultButton className="my-custom-class">Label</DefaultButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("default-button");
    expect(button).toHaveClass("my-custom-class");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<DefaultButton onClick={handleClick}>Click me</DefaultButton>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const handleClick = vi.fn();
    render(
      <DefaultButton disabled onClick={handleClick}>
        Disabled
      </DefaultButton>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("forwards aria-label to the underlying button element", () => {
    render(<DefaultButton aria-label="close dialog">X</DefaultButton>);
    const button = screen.getByRole("button", { name: /close dialog/i });
    expect(button).toHaveAttribute("aria-label", "close dialog");
  });

  it("renders children as a React node (e.g. JSX element)", () => {
    render(
      <DefaultButton>
        <span data-testid="inner-span">Icon</span>
      </DefaultButton>
    );
    expect(screen.getByTestId("inner-span")).toBeInTheDocument();
    expect(screen.getByTestId("inner-span")).toHaveTextContent("Icon");
  });
});
