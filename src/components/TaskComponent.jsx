import { useState, useEffect } from "react";

export default function TaskComponent({ tasks, deleteTask }) {
  const [search, setSearch] = useState("");
  const [randomTask, setRandomTask] = useState("");
  const [sortedTasks, setSortedTasks] = useState(tasks);

  // Handle Search Input Change
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Sort Tasks Alphabetically by Name
  const sortTasks = () => {
    const sorted = [...tasks].sort((a, b) => a.name.localeCompare(b.name));
    setSortedTasks(sorted);
  };

  // Filter Tasks Based on Search
  const filteredTasks = sortedTasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  // Get Random Task from List
  const getRandomTask = () => {
    const random = tasks[Math.floor(Math.random() * tasks.length)];
    setRandomTask(random ? random.name : "No tasks available");
  };

  // Update sorted tasks whenever tasks are updated
  useEffect(() => {
    setSortedTasks(tasks);
  }, [tasks]);

  return (
    <div>
      <h1>Task List:</h1>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Tasks..."
        value={search}
        onChange={handleSearch}
      />
      {/* Sort Button */}
      <button onClick={sortTasks}>Sort by Name</button>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <strong>{task.name}</strong>
            <p>{task.description}</p> {/* Display task description */}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h1>Complete This Task:</h1>
      <h3>{randomTask || "Click the button to get a task!"}</h3>
      {/* Random Task Button */}
      <button onClick={getRandomTask}>Random Task</button>
    </div>
  );
}
