import React, { useState } from "react";
import { API_KEY, API_URL } from "./API/constants";
import Operations from "./Operations";

const Task = ({ data }) => {
  const [task, setTask] = useState(data);
  const [addView, setAddView] = useState(false);
  const [operationDescription, setOperationDescription] = useState("");
  const [operationReload, setOperationReload] = useState(true);

  const finishTask = (title, description, id, e) => {
    e.preventDefault();
    const chanegeStatus = async (title, description, id) => {
      const requestOptions = {
        method: "PUT",
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, status: "closed" }),
      };

      await fetch(`${API_URL}/tasks/${id}`, requestOptions);
    };
    chanegeStatus(title, description, id);
    setTask((prev) => {
      return {
        ...prev,
        status: "closed",
      };
    });
  };

  const deleteTask = (id, e) => {
    e.preventDefault();
    const deleteT = async (id) => {
      const requestOptions = {
        method: "DELETE",
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
      };

      await fetch(`${API_URL}/tasks/${id}`, requestOptions);
    };
    deleteT(id);
    setTask(false);
  };

  const addOperationView = () => {
    setAddView(true);
  };

  const addOperation = (id, e) => {
    e.preventDefault();
    const newOperation = async (id) => {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: operationDescription,
          timeSpent: 0,
        }),
      };
      await fetch(`${API_URL}/tasks/${id}/operations`, requestOptions);
      setOperationDescription("");
      setAddView(false);
      setOperationReload(prev => !prev);
    };
    newOperation(id);
  };

  if (task === false) {
    return null;
  } else {
    return (
      <section className="card mt-5 shadow-sm" key={task.id}>
        <div className="card-header d-flex justify-content-between align-items-center">
          <div>
            <h5>{task.title}</h5>
            <h6 className="card-subtitle text-muted">{task.description}</h6>
          </div>
          <div>
            {task.status === "open" && (
              <>
                <button
                  className="btn btn-info btn-sm mr-2"
                  onClick={addOperationView}
                >
                  Add operation
                  <i className="fas fa-plus-circle ml-1"></i>
                </button>
                <button
                  className="btn btn-dark btn-sm"
                  onClick={(e) =>
                    finishTask(task.title, task.description, task.id, e)
                  }
                >
                  Finish
                  <i className="fas fa-archive ml-1"></i>
                </button>
              </>
            )}

            <button
              className="btn btn-outline-danger btn-sm ml-2"
              onClick={(e) => deleteTask(task.id, e)}
            >
              <i className="fas fa-trash false" />
            </button>
          </div>
        </div>
        {addView && (
          <div className="card-body">
            <form onSubmit={(e) => addOperation(task.id, e)}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Operation description"
                  value={operationDescription}
                  onChange={(e) => setOperationDescription(e.target.value)}
                />
                <div className="inout-group-append">
                  <button className="btn btn-info">
                    Add
                    <i className="fas fa-plus-circle ml-1" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
        <Operations taskId={task.id} newOp={operationReload} />
      </section>
    );
  }
};

export default Task;
