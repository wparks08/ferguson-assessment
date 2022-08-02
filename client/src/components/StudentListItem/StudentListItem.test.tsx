import React from "react";
import { render, screen } from "@testing-library/react";
import StudentListItem from "./index";

const mockProps = {
    student: {
        _id: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        stateOfResidenceCode: "",
        zip: "",
    },
    onViewStudent: jest.fn(),
};

/**
 * StudentListItem component tests
 */
describe("StudentListItem component tests", () => {
    it("should render", () => {
        render(<StudentListItem {...mockProps} />);
        expect(screen.getByTestId("student-list-item")).toBeInTheDocument();
    });

    it("should call onViewStudent when the view button is clicked", () => {
        render(<StudentListItem {...mockProps} />);
        screen.getByText("View").click();
        expect(mockProps.onViewStudent).toHaveBeenCalled();
    });
});
