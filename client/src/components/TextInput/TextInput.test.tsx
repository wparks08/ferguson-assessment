import React from "react";
import { render, screen } from "@testing-library/react";
import TextInput from "./index";

/**
 * TextInput component tests
 */

describe("TextInput component tests", () => {
    it("should render", () => {
        render(<TextInput label="test" />);
        expect(screen.getByLabelText("test")).toBeInTheDocument();
    });

    it("should have a class of 'input'", () => {
        render(<TextInput label="test" />);
        expect(screen.getByLabelText("test")).toHaveClass("input");
    });
});
