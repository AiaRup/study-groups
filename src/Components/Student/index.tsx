import React, { FC } from 'react';
import { Container } from './styles';
import { Draggable } from 'react-beautiful-dnd';
import { IStudent } from '../../utils/index';

interface StudentProps {
  student: IStudent;
  index: number;
}

const Student: FC<StudentProps> = ({ student, index }) => {
  return (
    <Draggable draggableId={student.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {student.name}
        </Container>
      )}
    </Draggable>
  );
};

export default Student;
