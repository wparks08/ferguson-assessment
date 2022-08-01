import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./index";

/**
 * Button component tests
 */

describe("Button component", () => {
    it("renders without crashing", () => {
        render(<Button />);
    });

    it("renders the button text", () => {
        render(<Button>Submit</Button>);
        expect(screen.getByText("Submit")).toBeInTheDocument();
    });

    it("renders the button with the correct class", () => {
        render(<Button>Submit</Button>);
        expect(screen.getByText("Submit")).toHaveClass("button");
    });

    it("correctly renders a button with variant=primary", () => {
        render(<Button variant="primary">Submit</Button>);
        expect(screen.getByText("Submit")).toHaveClass("button-primary");
    });

    it("correctly renders a button with variant=secondary", () => {
        render(<Button variant="secondary">Submit</Button>);
        expect(screen.getByText("Submit")).toHaveClass("button-secondary");
    });
});
