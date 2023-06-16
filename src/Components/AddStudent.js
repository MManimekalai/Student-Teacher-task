import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function AddStudent({ students, setStudents }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [course, setCourse] = useState('');
  const [batch, setBatch] = useState('');

  useEffect(() => {
    if (id !== undefined && students[id]) {
      setName(students[id].name);
      setEmail(students[id].email);
      setMobile(students[id].mobile);
      setCourse(students[id].course);
      setBatch(students[id].batch);
    }
  }, [id, students]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name, email, mobile, course, batch };
    const updatedStudents = [...students];
    if (id !== undefined && updatedStudents[id]) {
      updatedStudents[id] = newStudent;
    } else {
      updatedStudents.push(newStudent);
    }
    setStudents(updatedStudents);
    navigate('/studentslist');
  };

  return (
    <>
      <div className="container-fluid">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Course</Form.Label>
            <Form.Control
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Batch</Form.Label>
            <Form.Control
              type="text"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddStudent;
