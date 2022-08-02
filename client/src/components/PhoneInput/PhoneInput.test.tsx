import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PhoneInput from "./index";

/**
 * PhoneInput component tests
 */
describe("PhoneInput component tests", () => {
    it("should render", () => {
        render(<PhoneInput label="test-phone" />);
        expect(screen.getByLabelText("test-phone")).toBeInTheDocument();
    });

    it("should have a placeholder of (###) ###-####", () => {
        render(<PhoneInput label="test-phone" />);
        expect(screen.getByLabelText("test-phone")).toHaveAttribute("placeholder", "(###) ###-####");
    });

    it("should format an entered phone number as (###) ###-####", () => {
        render(<PhoneInput label="test-phone" />);
        const input = screen.getByLabelText("test-phone");
        fireEvent.change(input, { target: { value: "1234567890" } });
        expect(input).toHaveValue("(123) 456-7890");
    });
});
