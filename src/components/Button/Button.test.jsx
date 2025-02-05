import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("<Button />", () => {
  it("Should render button with text", () => {
    render(<Button>Click me</Button>);
    
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("Should apply the correct class", () => {
    render(<Button className="test-class">Click me</Button>);
    
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toHaveClass("test-class");
  });

  it("Should call onClick when button is clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={onClick}>Click me</Button>);

    const buttonElement = screen.getByRole("button", { name: /click me/i });

    await user.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("Should not call onClick when button is disabled", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={onClick} disabled>Click me</Button>);

    const buttonElement = screen.getByRole("button", { name: /click me/i });

    await user.click(buttonElement);

    expect(onClick).not.toHaveBeenCalled();
  });
});