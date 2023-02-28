import React from "react";
import { createRoot } from "react-dom/client";
import NewTask from "./NewTask";
import Tasks from "./Tasks";

function App() {
  return (
    <>
      <NewTask />
      <Tasks />
    </>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
