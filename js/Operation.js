import React, { useState } from "react";
import { API_KEY, API_URL } from "./API/constants";

const Operation = ({ data }) => {
  const [operation, setOperation] = useState(data);
  const [addTimeDisplay, setAddTimeDisplay] = useState(false);
  const [timeInput, setTimeInput] = useState(0);

  const showAddTime = () => {
    setAddTimeDisplay(!addTimeDisplay);
  };

  const addTime = (id, description, e) => {
    e.preventDefault();
    const chanegeTime = async (id) => {
      const requestOptions = {
        method: "PUT",
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description,
          timeSpent: Number(operation.timeSpent) + Number(timeInput),
        }),
      };

      await fetch(`${API_URL}/operations/${id}`, requestOptions);
      showAddTime();
    };
    chanegeTime(id, description);
    setOperation((prev) => {
      return {
        ...prev,
        timeSpent: Number(prev.timeSpent) + Number(timeInput),
      };
    });
  };

  const deleteOperation = (id, e) => {
    e.preventDefault();
    const deleteO = async (id) => {
      const requestOptions = {
        method: "DELETE",
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
      };
      await fetch(`${API_URL}/operations/${id}`, requestOptions);
    };
    deleteO(id);
    setOperation(false);
  };

  if (operation === false) return null;
  return (
    <ul className="list-group list-group-flush">
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={operation.id}
      >
        <div>
          {operation.description}
          {operation.timeSpent !== 0 && (
            <span className="badge badge-success badge-pill ml-2">
              {operation.timeSpent} min
            </span>
          )}
        </div>
        <div>
          {operation.task.status === "open" && !addTimeDisplay && (
            <button
              className="btn btn-outline-success btn-sm mr-2"
              onClick={showAddTime}
            >
              Add time
              <i className="fas fa-clock ml-1" />
            </button>
          )}
          {!addTimeDisplay && (
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={(e) => deleteOperation(operation.id, e)}
            >
              <i className="fas fa-trash" />
            </button>
          )}
        </div>
        {addTimeDisplay && (
          <form>
            <div className="input-group input-group-sm">
              <input
                type="number"
                className="form-control"
                placeholder="Spent time in minutes"
                style={{ width: "12rem" }}
                value={timeInput}
                onChange={(e) => setTimeInput(e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-success"
                  onClick={(e) =>
                    addTime(operation.id, operation.description, e)
                  }
                >
                  <i className="fas fa-save" />
                </button>
                <button className="btn btn-outline-dark" onClick={showAddTime}>
                  <i className="fas fa-times false" />
                </button>
              </div>
            </div>
          </form>
        )}
      </li>
    </ul>
  );
};

export default Operation;
