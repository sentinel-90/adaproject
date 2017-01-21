import React from 'react';

function TaskList(props) {
  return (
    <div className="task-list bg-faded p-3">
      <button type="button" className="btn btn-primary mb-3">Add task</button>

      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">Task 10</a>
        <a href="#" className="list-group-item list-group-item-action active">Task 20</a>
        <a href="#" className="list-group-item list-group-item-action">Task 30</a>
        <a href="#" className="list-group-item list-group-item-action">Task 40</a>
        <a href="#" className="list-group-item list-group-item-action">Task 50</a>
      </div>
    </div>
  );
}

export default TaskList;
