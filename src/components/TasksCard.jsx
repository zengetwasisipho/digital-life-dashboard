import { useState, useEffect } from "react";

function TasksCard() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="card">
      <h2 data-icon="📋">Tasks</h2>

      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999', fontSize: '0.95rem', marginTop: '20px' }}>
          No tasks yet. Start building your day
        </p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <button onClick={() => removeTask(index)} style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TasksCard;