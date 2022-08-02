import React from "react";
import { render, screen } from "@testing-library/react";
import { Typography } from "./index";

/**
 * Typography component tests
 */
describe("Typography component tests", () => {
    it("should render", () => {
        render(<Typography>test</Typography>);
        expect(screen.getByText("test")).toBeInTheDocument();
    });

    it("should have a class of 'typography'", () => {
        render(<Typography>test</Typography>);
        expect(screen.getByText("test")).toHaveClass("typography");
    });

    it("should correctly render the h1 variant", () => {
        render(<Typography variant="h1">test</Typography>);
        expect(screen.getByText("test")).toHaveClass("h1");
    });

    it("should correctly render the h2 variant", () => {
        render(<Typography variant="h2">test</Typography>);
        expect(screen.getByText("test")).toHaveClass("h2");
    });
    it("should correctly render the h3 variant", () => {
        render(<Typography variant="h3">test</Typography>);
        expect(screen.getByText("test")).toHaveClass("h3");
    });

    it("should correctly render the h4 variant", () => {
        render(<Typography variant="h4">test</Typography>);
        expect(screen.getByText("test")).toHaveClass("h4");
    });

    it("should correctly render the h5 variant", () => {
        render(<Typography variant="h5">test</Typography>);
        expect(screen.getByText("test")).toHaveClass("h5");
    });

    it("should correctly render the h6 variant", () => {
        render(<Typography variant="h6">test</Typography>);
        expect(screen.getByText("test")).toHaveClass("h6");
    });

    it("should correctly render the p variant", () => {
        render(<Typography variant="p">test</Typography>);
        expect(screen.getByText("test")).toHaveClass("p");
    });

    it("should correctly render the span variant", () => {
        render(<Typography variant="span">test</Typography>);
        expect(screen.getByText("test")).toHaveClass("span");
    });
});
