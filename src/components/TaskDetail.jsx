import React from 'react';

import "../../node_modules/medium-editor/src/sass/medium-editor.scss";
import "../../node_modules/medium-editor/src/sass/themes/default.scss";

import Editor from 'react-medium-editor';

function TaskDetail(props) {
  return (
    <div className="task-content">
      <button type="button" className="btn btn-primary float-right ml-3">Complete</button>
      <h2 className="mb-3">
        <Editor
            text={props.title}
            options={
              {
                toolbar: false,
                placeholder: {text: "Task name"}
              }
            }
          />
        </h2>

        <Editor
            options={
              {
                toolbar: {buttons: ['bold', 'italic', 'underline', 'quote', 'anchor']},
                placeholder: {text: "Description"}
              }
            }
          />
    </div>
  );
}

TaskDetail.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default TaskDetail;
