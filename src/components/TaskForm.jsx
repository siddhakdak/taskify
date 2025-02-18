import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskdata, settaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskdata.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskdata.tags.some((item) => item === tag)) {
      const filterTags = taskdata.tags.filter((item) => item !== tag);
      settaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      settaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleTaskchange = (e) => {
    const { name, value } = e.target;
    settaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskdata];
    });

    settaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  // const [Task, setTask] = useState("")
  // const [status, setStatus] = useState("ToDo")
  // const handleTaskchange = (e) => {
  //     setTask(e.target.value)
  // }

  // const handleStatuschange = (e) => {
  //     setStatus(e.target.value)
  // }

  // console.log(Task, status);
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskdata.task}
          placeholder="Enter your task"
          className="task_input"
          onChange={handleTaskchange}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>

          <div>
            <select
              name="status"
              onChange={handleTaskchange}
              value={taskdata.status}
              className="task-status"
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button className="task_submit">+ Add Task</button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
