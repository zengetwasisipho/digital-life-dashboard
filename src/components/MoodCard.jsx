import { useState, useEffect } from "react";

function MoodCard() {
  const [selectedMood, setSelectedMood] = useState(() => {
    return localStorage.getItem("mood") || "";
  });

  const moods = [
    { id: "excellent", label: "Excellent", value: "😊" },
    { id: "good", label: "Good", value: "😐" },
    { id: "neutral", label: "Neutral", value: "😐" },
    { id: "tired", label: "Tired", value: "😴" },
    { id: "overwhelmed", label: "Overwhelmed", value: "😤" }
  ];

  const moodEmojis = ["😊", "😐", "😐", "😴", "😤"];

  useEffect(() => {
    localStorage.setItem("mood", selectedMood);
  }, [selectedMood]);

  const getMoodLabel = () => {
    const mood = moods.find(m => m.value === selectedMood);
    return mood ? mood.label : "";
  };

  return (
    <div className="card">
      <h2 data-icon="🎭">Mood</h2>

      <div className="moods">
        {moodEmojis.map((mood, index) => (
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
        <p className="mood-text">You're feeling: <strong>{getMoodLabel()}</strong></p>
      )}
    </div>
  );
}

export default MoodCard;