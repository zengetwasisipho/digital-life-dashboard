function SummaryCard() {
  // Get data from localStorage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const habits = JSON.parse(localStorage.getItem("habits")) || [];
  const mood = localStorage.getItem("mood") || "";

  // Calculate stats
  const completedHabits = habits.filter(h => h.done).length;

  return (
    <div className="card summary">
      <h2>✨ Today’s Summary</h2>

      <p>Tasks: {tasks.length}</p>
      <p>Habits completed: {completedHabits}/{habits.length}</p>
      <p>Mood: {mood || "Not selected"}</p>

      <div className="summary-message">
        {tasks.length === 0
          ? "Start small, you’ve got this 💜"
          : completedHabits === habits.length
          ? "Perfect day! You're unstoppable 🔥"
          : "You're doing great, keep going 💪"}
      </div>
    </div>
  );
}

export default SummaryCard;