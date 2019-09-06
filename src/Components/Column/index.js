import React from 'react';
import styled from 'styled-components';
import Student from '../Student/index';
import { Droppable } from 'react-beautiful-dnd';

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
      <Droppable droppableId={column.id}>
        {provided => (
          <StudentsList ref={provided.innerRef} {...provided.droppableProps}>
            {students.map((student, index) => (
              <Student key={student.id} index={index} student={student} />
            ))}
            {provided.placeholder}
          </StudentsList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
