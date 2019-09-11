import React from './node_modules/react';

const [groupField, setGroupField] = useState('');
const [studentField, setStudentField] = useState('');

export default function Form() {
  return (
    <form>
      <fieldset>
        <legend>Add Group</legend>

        <input
          autoFocus
          type="text"
          value={groupField}
          onChange={e => setGroupField(e.target.value)}
          placeholder="Group Title"
        />
        <input type="button" value="add group" />

        <legend>Add Student</legend>
        <input
          autoFocus
          type="text"
          value={studentField}
          onChange={e => setStudentField(e.target.value)}
          placeholder="Student Name"
        />
        <input type="button" value="add student" />
      </fieldset>
    </form>
  );
}
