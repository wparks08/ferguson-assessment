import React from "react";
import { render, screen } from "@testing-library/react";
import StudentInfoDialog from "./index";
import { IdStudent } from "../../../interfaces/id-student";

const mockProps = {
    isOpen: true,
    onClose: jest.fn(),
    onSubmit: jest.fn(),
    studentInfo: null,
};

const mockIdStudentInfo: IdStudent = {
    _id: "1",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "1234567890",
    stateOfResidenceCode: "CA",
    zip: "12345",
};

/**
 * StudentInfoDialog component tests
 */
describe("StudentInfoDialog component tests", () => {
    it("should render", () => {
        render(<StudentInfoDialog {...mockProps} />);
        expect(screen.getByText("First Name")).toBeInTheDocument();
    });

    it("should render the student info", () => {
        render(<StudentInfoDialog {...mockProps} studentInfo={mockIdStudentInfo} />);
        expect(screen.getByDisplayValue("John")).toBeInTheDocument();
    });
});
