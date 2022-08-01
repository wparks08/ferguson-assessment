import StudentInfoForm from "../../StudentInfoForm";
import { Typography } from "../../Typography";
import DialogActions from "../../DialogActions";
import Button from "../../Button";
import Dialog from "../index";
import React from "react";
import { useStudentFormState } from "../../../hooks/use-student-form-state";
import { useCreateStudent } from "../../../hooks/use-create-student";
import { IdStudent } from "../../../interfaces/id-student";

interface StudentInfoDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => unknown;
    studentInfo: IdStudent | null;
}

const StudentInfoDialog = ({ isOpen, onClose, onSubmit, studentInfo }: StudentInfoDialogProps) => {
    const { student, updateStudentField, clearStudent } = useStudentFormState({ student: studentInfo || undefined });
    const { submitStudent, status, error, clearStatus } = useCreateStudent({
        onSuccess: () => clearStudent(),
    });
    const editing = !studentInfo;

    const handleSubmit = async () => {
        await submitStudent(student);
        await onSubmit();
    };

    const handleClose = () => {
        clearStudent();
        clearStatus();
        onClose();
    };

    return (
        <Dialog isOpen={isOpen} onClose={handleClose}>
            <StudentInfoForm student={student} updateFn={updateStudentField} editing={editing} />
            <Typography variant="p" color="info">
                {status}
            </Typography>
            <Typography variant="p" color="warning">
                {error}
            </Typography>
            <DialogActions>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                {editing && (
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default StudentInfoDialog;
