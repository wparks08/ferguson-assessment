import React from "react";
import { render, screen } from "@testing-library/react";
import StudentInfoForm from "./index";
import { Student } from "../../../../src/interfaces/student";

const mockStudent: Student = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    stateOfResidenceCode: "",
    zip: "",
};

const mockProps = {
    student: mockStudent,
    updateFn: jest.fn(),
    editing: false,
};

/**
 * StudentInfoForm component tests
 */
describe("StudentInfoForm component tests", () => {
    it("should render", () => {
        render(<StudentInfoForm {...mockProps} />);
        expect(screen.getByTestId("student-info-form")).toBeInTheDocument();
    });

    it("should disable all child inputs if editing is false", () => {
        render(<StudentInfoForm {...mockProps} />);
        expect(screen.getByLabelText("First Name")).toBeDisabled();
        expect(screen.getByLabelText("Last Name")).toBeDisabled();
        expect(screen.getByLabelText("Phone Number")).toBeDisabled();
        expect(screen.getByLabelText("State of Residence")).toBeDisabled();
        expect(screen.getByLabelText("Zip")).toBeDisabled();
    });

    it("should enable all child inputs if editing is true", () => {
        render(<StudentInfoForm {...{ ...mockProps, editing: true }} />);
        expect(screen.getByLabelText("First Name")).not.toBeDisabled();
        expect(screen.getByLabelText("Last Name")).not.toBeDisabled();
        expect(screen.getByLabelText("Phone Number")).not.toBeDisabled();
        expect(screen.getByLabelText("State of Residence")).not.toBeDisabled();
        expect(screen.getByLabelText("Zip")).not.toBeDisabled();
    });
});
