import React, { useState } from 'react';
import { students, columns, columnOrder } from '../../basicData';
import Column from '../Column/index';
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {
  const [studentsList, setStudents] = useState(students);
  const [columnsList, setColumns] = useState(columns);
  const [columnsOrder, setOrder] = useState(columnOrder);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;

    const column = columnsList.find(column => column.id === source.droppableId);
    const newStudentsIds = Array.from(column.studentsIds);
    newStudentsIds.splice(source.index, 1);
    newStudentsIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      studentsIds: newStudentsIds
    };

    const newColumnsList = [...columnsList];
    newColumnsList[
      columnsList.map(column => column.id).indexOf(newColumn.id)
    ] = newColumn;

    setColumns(newColumnsList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        {columnsOrder.map(columnId => {
          const column = columnsList.find(column => column.id === columnId);
          const studentList = column.studentsIds.map(studentId =>
            studentsList.find(student => student.id === studentId)
          );
          return (
            <Column key={column.id} column={column} students={studentList} />
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default App;
