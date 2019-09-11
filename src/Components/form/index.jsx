import React from 'react';

export default function Form() {
  return (
    <form>
      <fieldset>
        <legend>Add Group</legend>
        <input type="text" name="group" placeholder="Group Title" />
        <input type="button" value="add group" />

        <legend>Add Student</legend>
        <input type="text" name="student" placeholder="Student Name" />
        <input type="button" value="add student" />
      </fieldset>
    </form>
  );
}
