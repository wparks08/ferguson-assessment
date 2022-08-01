import React from "react";
import { useListStudents } from "./hooks/use-list-students";
import StudentList from "./components/StudentList";
import StudentListItem from "./components/StudentListItem";
import Button from "./components/Button";
import Container from "./components/Container";
import { Typography } from "./components/Typography";
import "./App.css";
import { useDialog } from "./hooks/use-dialog";
import StudentInfoDialog from "./components/Dialog/StudentInfoDialog";
import { IdStudent } from "./interfaces/id-student";

function App() {
    const { students, refetchStudents } = useListStudents();
    const createStudentDialog = useDialog();
    const [selectedStudent, setSelectedStudent] = React.useState<IdStudent | null>(null);

    const handleViewStudent = (student: IdStudent) => {
        setSelectedStudent(student);
        createStudentDialog.open();
    };

    const handleCloseStudentDialog = () => {
        setSelectedStudent(null);
        createStudentDialog.close();
    };

    return (
        <Container>
            <Typography variant="h1">Students</Typography>
            <Container maxWidth={512}>
                <Container alignItems="flex-end">
                    <Button onClick={createStudentDialog.open}>Create</Button>
                </Container>
                <Container>
                    <StudentList>
                        {students.map((student) => (
                            <StudentListItem key={student._id} student={student} onViewStudent={handleViewStudent} />
                        ))}
                    </StudentList>
                </Container>
            </Container>
            <StudentInfoDialog
                isOpen={createStudentDialog.isOpen}
                onClose={handleCloseStudentDialog}
                onSubmit={refetchStudents}
                studentInfo={selectedStudent}
            />
        </Container>
    );
}

export default App;
