import React from "react";
import { createRoot } from "react-dom/client";
import NewTask from "./NewTask";

function App() {
  return (
    <>
      <NewTask />
    </>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
