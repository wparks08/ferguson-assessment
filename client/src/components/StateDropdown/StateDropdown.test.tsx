import React from "react";
import { render, screen } from "@testing-library/react";
import StateDropdown from "./index";

const mockProps = {
    value: "AL",
    onChange: jest.fn(),
};

/**
 * StateDropdown component tests
 */
describe("StateDropdown component tests", () => {
    it("should render", () => {
        render(<StateDropdown {...mockProps} />);
        expect(screen.getByLabelText("State of Residence")).toBeInTheDocument();
    });

    it("should have a class of 'input'", () => {
        render(<StateDropdown {...mockProps} />);
        expect(screen.getByLabelText("State of Residence")).toHaveClass("input");
    });
});
