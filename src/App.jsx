import React, { useState, useEffect } from "react";
import Greeting from "./components/Greeting";
import TasksCard from "./components/TasksCard";
import MoodCard from "./components/MoodCard";
import HabitsCard from "./components/HabitsCard";
import ExpensesCard from "./components/ExpensesCard";
import SummaryCard from "./components/SummaryCard";

function App() {
  // State for the user's name
  const [userName, setUserName] = useState("");
  // State to check if user has submitted their name
  const [hasName, setHasName] = useState(false);

  // Load name from localStorage on mount
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setUserName(savedName);
      setHasName(true);
    }
  }, []);

  // Handle name form submission
  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() !== "") {
      localStorage.setItem("userName", userName); // Save name
      setHasName(true); // Show dashboard
    }
  };

  // Optional: Allow changing the name
  const handleReset = () => {
    localStorage.removeItem("userName");
    setUserName("");
    setHasName(false);
  };

  return (
    <div className="app">
      {!hasName ? (
        // Welcome screen
        <div className="welcome-screen">
          <h1>👋 Welcome! What's your name?</h1>
          <form onSubmit={handleNameSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <button type="submit">Start</button>
          </form>
        </div>
      ) : (
        // Dashboard
        <div className="dashboard">
          {/* Personalized greeting */}
          <Greeting userName={userName} />

          {/* Cards grid */}
          <div className="grid">
            <TasksCard />
            <MoodCard />
            <HabitsCard />
            <ExpensesCard />
          </div>

          {/* Summary card */}
          <SummaryCard />

          {/* Optional: Button to change name */}
          <button onClick={handleReset} style={{ marginTop: "1rem" }}>
            Change Name
          </button>
        </div>
      )}
    </div>
  );
}

export default App;