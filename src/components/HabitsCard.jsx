import { useState, useEffect } from "react";

function HabitsCard() {
  // Load habits from localStorage or start with empty
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  const [newHabit, setNewHabit] = useState("");

  // Persist habits to localStorage
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // Toggle completion of a habit
  const toggleHabit = (index) => {
    const updated = habits.map((habit, i) =>
      i === index ? { ...habit, done: !habit.done } : habit
    );
    setHabits(updated);
  };

  // Add a new habit
  const handleAddHabit = () => {
    if (newHabit.trim() === "") return;
    setHabits([...habits, { name: newHabit.trim(), done: false }]);
    setNewHabit("");
  };

  // Optional: remove a habit
  const handleRemoveHabit = (index) => {
    setHabits(habits.filter((_, i) => i !== index));
  };

  const completedCount = habits.filter(h => h.done).length;

  return (
    <div className="card">
      <h2 data-icon="✓">Habits</h2>

      <div style={{ marginBottom: '16px', fontSize: '0.85rem', color: '#666' }}>
        {completedCount} of {habits.length} completed
      </div>

      {/* Input to add new habit */}
      <div style={{ marginBottom: '12px' }}>
        <input
          type="text"
          placeholder="Add a new habit"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          style={{ marginRight: '8px' }}
        />
        <button onClick={handleAddHabit}>Add</button>
      </div>

      <ul className="habits-list">
        {habits.length === 0 && <li>No habits yet. Add one above!</li>}
        {habits.map((habit, index) => (
          <li
            key={index}
            className={habit.done ? "habit done" : "habit"}
          >
            <span
              style={{ cursor: "pointer" }}
              onClick={() => toggleHabit(index)}
            >
              {habit.name} {habit.done ? "✓" : "○"}
            </span>
            <button
              onClick={() => handleRemoveHabit(index)}
              style={{ marginLeft: '8px' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitsCard;