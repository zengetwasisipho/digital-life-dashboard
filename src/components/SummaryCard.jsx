function SummaryCard() {
  // Get data from localStorage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const habits = JSON.parse(localStorage.getItem("habits")) || [];
  const mood = localStorage.getItem("mood") || "";

  // Calculate stats
  const completedHabits = habits.filter(h => h.done).length;
  const completedPercentage = habits.length > 0 ? Math.round((completedHabits / habits.length) * 100) : 0;

  const getMoodLabel = () => {
    const moodMap = {
      "😊": "Excellent",
      "😐": "Neutral",
      "😴": "Tired",
      "😤": "Overwhelmed"
    };
    return moodMap[mood] || "Not selected";
  };

  return (
    <div className="card summary">
      <h2 data-icon="★">Today's Summary</h2>

      <p>Tasks Added: <strong>{tasks.length}</strong></p>
      <p>Habits Completed: <strong>{completedHabits}/{habits.length}</strong> ({completedPercentage}%)</p>
      <p>Current Mood: <strong>{getMoodLabel()}</strong></p>

      <div className="summary-message">
        {tasks.length === 0 && completedHabits === 0
          ? "Start your day with intention"
          : completedHabits === habits.length && habits.length > 0 && tasks.length > 0
          ? "Exceptional progress today"
          : tasks.length > 0 || completedHabits > 0
          ? "Keep the momentum going"
          : "Day is waiting for you"}
      </div>
    </div>
  );
}

export default SummaryCard;