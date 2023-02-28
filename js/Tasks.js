import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "./API/constants";
import Task from "./Task";

const Tasks = ({newTask}) => {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch(`${API_URL}/tasks`, {
        headers: {
          Authorization: API_KEY,
        },
      });
      const data = await response.json();
      setAllTasks(data.data);
    };
    getTasks();
  }, [newTask]);

  if (allTasks === false) {
        return <h1>...</h1>;
  } else {
        return (
            <>
            {allTasks.map((value) => (
                <Task data={value} key={value.id} />
            ))}
            </>
        );
    }
};

export default Tasks;
