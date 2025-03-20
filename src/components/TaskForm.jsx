import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  // Handle Submit with Validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName === "" || taskDescription === "") {
      alert("Both Task Name and Description are required!");
      return;
    }
    addTask({ name: taskName, description: taskDescription });
    setTaskName("");  // Reset task name input
    setTaskDescription("");  // Reset task description input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Enter Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
