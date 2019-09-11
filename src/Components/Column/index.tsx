import React, { FC } from 'react';
import { Container, Title, StudentsList } from './styles';
import Student from '../Student/index';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { IColumn, IStudent } from '../../utils/index';

interface ColumnProps {
  students: IStudent[];
  column: IColumn;
  index: number;
}

const shouldUpdate = (prevProps: object, nextProps: object) =>
  prevProps.students === nextProps.students;

const InnerList = React.memo((props: object) => {
  return props.students.map((student: IStudent, index: number) => (
    <Student key={student.id} index={index} student={student} />
  ));
}, shouldUpdate);

const Column: FC<ColumnProps> = ({ students, column, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>{column.title}</Title>
          <Droppable droppableId={column.id} type="student">
            {(provided, snapshot) => (
              <StudentsList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <InnerList students={students} />
                {provided.placeholder}
              </StudentsList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
