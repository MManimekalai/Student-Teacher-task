import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function TeachersList({teachers, setTeachers}) {
console.log(teachers)

  const handleDelete = (index) => {
    const newTeachers = [...teachers];
    newTeachers.splice(index, 1);
    setTeachers(newTeachers);
  };

  return (
    <>
      <div className="card-container">
        {teachers.map((teacher, index) => (
          <Card
            className="text-align"
            border="primary"
            style={{ width: '18rem', flexBasis: '30%', marginBottom: '30px' }}
            key={index}
          >
            <Card.Header>
              <h3 className=''>{teacher.name}</h3>
            </Card.Header>
            <Card.Body>
              <div className="contents">
                <Card.Text><b>Email: </b>{teacher.email}</Card.Text>
                <Card.Text><b>Mobile: </b>{teacher.mobile}</Card.Text>
                <Card.Text><b>Expert in: </b>{teacher.expertise}</Card.Text>
              </div>
              <div className='m-3'>
                <Button variant="primary">
                  <i className="fa-solid fa-pen"></i>
                </Button>
                &nbsp; &nbsp;
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  <i className="fa-solid fa-trash"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default TeachersList;
