import React, { useState } from 'react';
import { students, columns, columnOrder } from '../../basicData';
import Column from '../Column/index';
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {
  const [studentsList, setStudent] = useState(students);
  const [columnsList, setColumn] = useState(columns);
  const [columnsOrder, setOrder] = useState(columnOrder);

  const onDragEnd = result => {
    // TODO: reorder our column
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
