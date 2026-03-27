import Greeting from "./components/Greeting";
import TasksCard from "./components/TasksCard";
import MoodCard from "./components/MoodCard";
import HabitsCard from "./components/HabitsCard";
import ExpensesCard from "./components/ExpensesCard";
import SummaryCard from "./components/SummaryCard";

function App() {
  return (
    <div className="app">
      <Greeting />

      <div className="grid">
        <TasksCard />
        <MoodCard />
        <HabitsCard />
        <ExpensesCard />
      </div>

      <SummaryCard />
    </div>
  );
}

export default App;