import React, { useState } from 'react';
import { students, columns, columnOrder } from '../../basicData';
import Column from '../Column/index';

const App = () => {
  const [studentsList, setStudent] = useState(students);
  const [columnsList, setColumn] = useState(columns);
  const [columnsOrder, setOrder] = useState(columnOrder);

  return (
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
  );
};

export default App;
