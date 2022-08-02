import React from "react";
import { render, screen } from "@testing-library/react";
import DialogActions from "./index";

/**
 * DialogActions component tests
 */
describe("DialogActions component tests", () => {
    it("should render", () => {
        render(<DialogActions />);
        expect(screen.getByTestId("dialog-actions")).toBeInTheDocument();
    });

    it("should have a class of dialog-actions", () => {
        render(<DialogActions />);
        expect(screen.getByTestId("dialog-actions")).toHaveClass("dialog-actions");
    });
});
