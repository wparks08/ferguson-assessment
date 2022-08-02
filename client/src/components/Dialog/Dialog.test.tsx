import React from "react";
import { render, screen, within } from "@testing-library/react";
import Dialog from "./index";

const mockProps = {
    isOpen: true,
    onClose: jest.fn(),
    children: <div>Hello</div>,
};

/**
 * Dialog component tests
 */
describe("Dialog component tests", () => {
    it("should render", () => {
        render(<Dialog {...mockProps} />);
        expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("should render the children", () => {
        render(<Dialog {...mockProps} />);
        expect(screen.getByText("Hello")).toBeInTheDocument();
    });
});
