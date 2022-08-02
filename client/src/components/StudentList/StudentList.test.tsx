import React from "react";
import { render, screen } from "@testing-library/react";
import StudentList from "./index";

/**
 * StudentList component tests
 */
describe("StudentList component tests", () => {
    it("should render", () => {
        render(
            <StudentList>
                <li>test item</li>
            </StudentList>
        );
        expect(screen.getByTestId("student-list")).toBeInTheDocument();
    });

    it("should have a class of student-list", () => {
        render(
            <StudentList>
                <li>test item</li>
            </StudentList>
        );
        expect(screen.getByTestId("student-list")).toHaveClass("student-list");
    });

    it("should render 'No students found' if no students are passed in", () => {
        render(<StudentList />);
        expect(screen.getByText("No students found.")).toBeInTheDocument();
    });
});
