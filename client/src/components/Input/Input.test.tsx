import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./index";

/**
 * Input component tests
 */
describe("Input component tests", () => {
    it("should render", () => {
        render(<Input label="test" name="test" />);
        expect(screen.getByLabelText("test")).toBeInTheDocument();
    });

    it("should have a class of input", () => {
        render(<Input label="test" name="test" />);
        expect(screen.getByLabelText("test")).toHaveClass("input");
    });

    it("should correctly apply the type prop", () => {
        render(<Input label="test" name="test" type="text" />);
        expect(screen.getByLabelText("test")).toHaveAttribute("type", "text");
    });

    it("should correctly apply the value prop", () => {
        render(<Input label="test" name="test" value="test" />);
        expect(screen.getByLabelText("test")).toHaveValue("test");
    });

    it("should correctly apply the onChange prop", () => {
        const mockOnChange = jest.fn();
        render(<Input label="test" name="test" onChange={mockOnChange} />);
        fireEvent.change(screen.getByLabelText("test"), { target: { value: "test" } });
        expect(mockOnChange).toHaveBeenCalled();
    });

    it("should correctly apply the label prop", () => {
        render(<Input label="test1" name="test" />);
        expect(screen.getByLabelText("test1")).toHaveAttribute("aria-label", "test1");
    });

    it("should correctly apply the name prop", () => {
        render(<Input label="test" name="test" />);
        expect(screen.getByLabelText("test")).toHaveAttribute("name", "test");
    });

    it("should correctly apply the placeholder prop", () => {
        render(<Input label="test" name="test" placeholder="test" />);
        expect(screen.getByLabelText("test")).toHaveAttribute("placeholder", "test");
    });

    it("should correctly apply the onKeyDown prop", () => {
        const mockOnKeyDown = jest.fn();
        render(<Input label="test" name="test" onKeyDown={mockOnKeyDown} />);
        fireEvent.keyDown(screen.getByLabelText("test"), { key: "Enter" });
        expect(mockOnKeyDown).toHaveBeenCalled();
    });
});
