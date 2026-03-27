import { useState, useEffect } from "react";

function HabitsCard() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved
      ? JSON.parse(saved)
      : [
          { name: "Drink Water 💧", done: false },
          { name: "Exercise 🏋️", done: false },
          { name: "Study 📚", done: false }
        ];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const toggleHabit = (index) => {
    const updated = habits.map((habit, i) => {
      if (i === index) {
        return { ...habit, done: !habit.done };
      }
      return habit;
    });

    setHabits(updated);
  };

  return (
    <div className="card">
      <h2>Habits</h2>

      <ul className="habits-list">
        {habits.map((habit, index) => (
          <li
            key={index}
            className={habit.done ? "habit done" : "habit"}
            onClick={() => toggleHabit(index)}
          >
            {habit.name}
            <span>{habit.done ? "✔" : "✖"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitsCard;