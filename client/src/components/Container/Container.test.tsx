import React from "react";
import { render, screen } from "@testing-library/react";
import Container from "./index";

/**
 * Container component tests
 */
describe("Container component tests", () => {
    it("should render", () => {
        render(<Container />);
        expect(true).toBe(true);
    });

    it("should obey the maxWidth prop", () => {
        render(<Container maxWidth={100} />);
        expect(screen.getByTestId("container")).toHaveStyle("max-width: 100px");
    });

    it("should obey the justifyContent prop", () => {
        render(<Container justifyContent="flex-start" />);
        expect(screen.getByTestId("container")).toHaveStyle("justify-content: flex-start");
    });

    it("should obey the alignItems prop", () => {
        render(<Container alignItems="flex-start" />);
        expect(screen.getByTestId("container")).toHaveStyle("align-items: flex-start");
    });

    it("should obey the column prop", () => {
        render(<Container column />);
        expect(screen.getByTestId("container")).toHaveStyle("flex-direction: column");
    });

    it("should obey the row prop", () => {
        render(<Container row />);
        expect(screen.getByTestId("container")).toHaveStyle("flex-direction: row");
    });
});
