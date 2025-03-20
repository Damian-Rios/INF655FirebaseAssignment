import './App.css';
import Greeting from './components/Greeting';
import TaskComponent from './components/TaskComponent';
import UserInfo from './components/UserInfo';
import Counter from './components/Counter';
import TaskForm from './components/TaskForm';
import { useState } from 'react';

function App() {
  const handleAlert = () => {
    alert("Hello from UserInfo!");
  };

  // State to store tasks
  const [tasks, setTasks] = useState([
    { id: 1, name: "Clean Room", description: "Clean the entire room" },
    { id: 2, name: "Get Groceries", description: "Buy weekly groceries" },
    { id: 3, name: "Finish Homework", description: "Complete all assignments" },
    { id: 4, name: "Cook Dinner", description: "Make dinner for the family" }
  ]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now() }]);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Sally" />
      <UserInfo handleClick={handleAlert} />
      <TaskForm addTask={addTask} /> {/* Pass addTask to TaskForm */}
      <TaskComponent tasks={tasks} deleteTask={deleteTask} /> {/* Pass tasks and deleteTask to TaskComponent */}
      <Counter />
    </div>
  );
}

export default App;
