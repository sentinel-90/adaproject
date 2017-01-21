import React from 'react';

function TaskList(props) {
  return (
    <div className="task-list bg-faded p-3">
      <button type="button" className="btn btn-primary mb-3">Add task</button>

      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">Task 1</a>
        <a href="#" className="list-group-item list-group-item-action active">Task 2</a>
        <a href="#" className="list-group-item list-group-item-action">Task 3</a>
        <a href="#" className="list-group-item list-group-item-action">Task 4</a>
        <a href="#" className="list-group-item list-group-item-action">Task 5</a>
      </div>
    </div>
  );
}

export default TaskList;
