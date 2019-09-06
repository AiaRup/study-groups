import React from 'react';
import styled from 'styled-components';
import Student from '../Student/index';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const StudentsList = styled.div`
  padding: 8px;
`;

const Column = ({ students, column }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <StudentsList>
        {students.map(student => (
          <Student key={student.id} student={student} />
        ))}
      </StudentsList>
    </Container>
  );
};

export default Column;
