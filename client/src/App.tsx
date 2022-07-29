import React from "react";
import { useListStudents } from "./hooks/use-list-students";
import StudentList from "./components/StudentList";
import StudentListItem from "./components/StudentListItem";
import Button from "./components/Button";
import Container from "./components/Container";
import CreateStudentForm from "./components/CreateStudentForm";
import { Typography } from "./components/Typography";
import "./App.css";

function App() {
    const { students, refetchStudents } = useListStudents();

    return (
        <Container>
            <Typography variant="h1">Students</Typography>
            <Container>
                <StudentList>
                    {students.map((student) => (
                        <StudentListItem key={student._id} student={student} />
                    ))}
                </StudentList>
                <Button>Create</Button>
            </Container>
            <Container>
                <CreateStudentForm onSubmit={refetchStudents} />
            </Container>
        </Container>
    );
}

export default App;
