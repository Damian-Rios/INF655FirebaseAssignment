import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { collection, addDoc, query, where, onSnapshot, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, 'tasks'), where('userId', '==', auth.currentUser.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tasksData = [];
      querySnapshot.forEach((doc) => {
        tasksData.push({ id: doc.id, ...doc.data() });
      });
      setTasks(tasksData);
    });

    return () => unsubscribe();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'tasks'), {
        userId: auth.currentUser.uid,
        taskName,
        taskDescription,
        createdAt: serverTimestamp()
      });
      setTaskName('');
      setTaskDescription('');
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  const handleDeleteTask = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, 'tasks', id));
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div>
      <h2>Welcome, {auth.currentUser.email}</h2>
      <button onClick={handleLogout}>Logout</button>

      <form onSubmit={handleAddTask}>
        <h3>Add Task</h3>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Task Name" required />
        <input type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder="Task Description" required />
        <button type="submit">Add Task</button>
      </form>

      <h3>Your Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.taskName}</strong>: {task.taskDescription}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
