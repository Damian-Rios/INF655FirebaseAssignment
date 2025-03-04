export default function TaskComponent(){
    const tasks = [
        "Clean Room",
        "Get Groceries",
        "Finish Homework",
        "Cook Dinner"
    ];

    const getRandomTask = () => {
        return tasks[Math.floor(Math.random() * tasks.length)];
    };

    return (
        <div>
            <h1>Task List:</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}>{task}
                    </li>
                ))}
            </ul>
    
            <h1>Complete This Task:</h1>
            <h3>{getRandomTask()}</h3>
        </div>
    );
};