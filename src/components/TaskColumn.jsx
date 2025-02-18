import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icons, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icons} alt="" /> {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index = {index} />
          )
      )}
    </section>
  );
};

export default TaskColumn;
