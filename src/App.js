import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import TeachersList from "./Components/TeachersList";
import StudentsList from "./Components/StudentsList";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AddStudent from "./Components/AddStudent";

function App() {
  let initialStudents = [
    {
      name: "Raja Sekar",
      email: "raj@gmail.com",
      mobile: "9876543210",
      course: "DSA",
      batch: "B45",
    },
    {
      name: "Megha",
      email: "megha@gmail.com",
      mobile: "9876543511",
      course: "React",
      batch: "B45",
    },
    {
      name: "Vengatesh",
      email: "vengatesh@gmail.com",
      mobile: "80989019801",
      course: "Javascript",
      batch: "B45",
    },
    {
      name: "Kiruthika",
      email: "kiruthika@gmail.com",
      mobile: "9876543210",
      course: "DSA",
      batch: "B45",
    },
    {
      name: "Gopi",
      email: "gopi@gmail.com",
      mobile: "9876543210",
      course: "React",
      batch: "B45",
    },
    {
      name: "Sindhu",
      email: "sindhu@gmail.com",
      mobile: "9876543210",
      course: "Javascript",
      batch: "B45",
    },
  ];

  let [students, setStudents] = useState(initialStudents);

  const initialTeachers = [
    {
      name: "Sathish",
      email: "sathish@gmail.com",
      mobile: "9876543210",
      expertise: "DSA"
    },
    {
      name: "Nagarajan",
      email: "nagarajan@gmail.com",
      mobile: "9876543511",
      expertise: "React"
    },
    {
      name: "SaiMohan",
      email: "ganesh@gmail.com",
      mobile: "80989019801",
      expertise: "Javascript"
    },
  ];

  const [teachers, setTeachers] = useState(initialTeachers);

  return (
    <Router>
      <div id="wrapper">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard students={students} setStudents={setStudents} teachers={teachers} setTeachers={setTeachers}/>} />
          <Route path="/teacherslist" element={<TeachersList teachers={teachers} setTeachers={setTeachers} />} />
          <Route
            path="/studentslist"
            element={<StudentsList students={students} setStudents={setStudents} />}
          />
          <Route path="/addstudent" element={<AddStudent students={students} setStudents={setStudents} />} />
          <Route path="/edit-student/:id" element={<AddStudent students={students} setStudents={setStudents} />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;