import React, { useState } from "react";
import { API_KEY, API_URL } from "./API/constants";
import Tasks from "./Tasks";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasksReload, setTasksReload] = useState(true);

  const submitNewTask = (e) => {
    e.preventDefault();
    const addNewTask = async (title, description) => {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, status: "open" }),
      };

      await fetch(`${API_URL}/tasks`, requestOptions);
      setTitle("");
      setDescription("");
      setTasksReload(prev => !prev);
    };
    addNewTask(title, description);
  };

  return (
    <>
    <div className="card shadow">
      <div className="card-body">
        <h1 className="card-title">New task</h1>
        <form onSubmit={(e) => submitNewTask(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="btn btn-info">
            Add task
            <i className="fas fa-plus-circle ml-1"></i>
          </button>
        </form>
      </div>
    </div>
    <Tasks newTask={tasksReload}/>
    </>
  );
};

export default NewTask;
