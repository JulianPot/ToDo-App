import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "./API/constants";
import Operation from "./Operation";

const Operations = ({ taskId, newOp }) => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    const getOperations = async (id) => {
      const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
        headers: {
          Authorization: API_KEY,
        },
      });
      const data = await response.json();
      setOperations(data.data);
    };
    getOperations(taskId);
  }, [newOp]);

  if (operations === false) {
    return <h1>...</h1>;
  } else {
    return (
      <>
        {operations.map((value) => (
          <Operation data={value} key={value.id} />
        ))}
      </>
    );
  }
};

export default Operations;
