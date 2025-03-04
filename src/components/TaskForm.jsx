import { useState } from "react";

export default function TaskForm (){
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Task added:", task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Task Name"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}