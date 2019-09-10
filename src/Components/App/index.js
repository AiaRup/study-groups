import React, { useState } from 'react';
import { students, columns, columnOrder } from '../../basicData';
import Column from '../Column/index';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const App = () => {
  const [studentsList, setStudents] = useState(students);
  const [columnsList, setColumns] = useState(columns);
  const [columnsOrder, setOrder] = useState(columnOrder);

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;

    if (type === 'column') {
      const newColumnOrder = Array.from(columnsOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setOrder(newColumnOrder);
      return;
    }

    const columnStart = columnsList.find(
      column => column.id === source.droppableId
    );
    const columnEnd = columnsList.find(
      column => column.id === destination.droppableId
    );

    if (columnStart === columnEnd) {
      const newStudentsIds = Array.from(columnStart.studentsIds);
      newStudentsIds.splice(source.index, 1);
      newStudentsIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...columnStart,
        studentsIds: newStudentsIds
      };

      const newColumnsList = [...columnsList];
      newColumnsList[
        columnsList.map(columnStart => columnStart.id).indexOf(newColumn.id)
      ] = newColumn;

      setColumns(newColumnsList);
      return;
    }

    const startStudentIds = Array.from(columnStart.studentsIds);
    startStudentIds.splice(source.index, 1);
    const newStart = {
      ...columnStart,
      studentsIds: startStudentIds
    };

    const finishStudentkIds = Array.from(columnEnd.studentsIds);
    finishStudentkIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...columnEnd,
      studentsIds: finishStudentkIds
    };

    const newColumnsList = [...columnsList];
    newColumnsList[
      columnsList.map(columnStart => columnStart.id).indexOf(newStart.id)
    ] = newStart;
    newColumnsList[
      columnsList.map(columnEnd => columnEnd.id).indexOf(newFinish.id)
    ] = newFinish;

    setColumns(newColumnsList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {provided => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {columnsOrder.map((columnId, index) => {
              const column = columnsList.find(column => column.id === columnId);
              const studentList = column.studentsIds.map(studentId =>
                studentsList.find(student => student.id === studentId)
              );
              return (
                <Column
                  key={column.id}
                  column={column}
                  students={studentList}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default App;
