import { useState, useEffect } from "react";

function MoodCard() {
  const [selectedMood, setSelectedMood] = useState(() => {
    return localStorage.getItem("mood") || "";
  });

  const moods = ["😄", "😐", "😔", "😤", "😴"];

  useEffect(() => {
    localStorage.setItem("mood", selectedMood);
  }, [selectedMood]);

  return (
    <div className="card">
      <h2>Mood</h2>

      <div className="moods">
        {moods.map((mood, index) => (
          <span
            key={index}
            className={selectedMood === mood ? "mood selected" : "mood"}
            onClick={() => setSelectedMood(mood)}
          >
            {mood}
          </span>
        ))}
      </div>

      {selectedMood && (
        <p className="mood-text">You’re feeling: {selectedMood}</p>
      )}
    </div>
  );
}

export default MoodCard;