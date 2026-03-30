# 🌟 Digital Life Dashboard

A **React-based personal productivity dashboard** that helps users track tasks, habits, and mood in one interactive, persistent interface.  

This project demonstrates **state management, interactivity, persistent storage**, and a clean, modern UI/UX design.

---

## 🔥 Live Demo

Try it live here: [Digital Life Dashboard](https://YOUR_LIVE_URL_HERE)  

- Visitors are prompted to **enter their name** upon first visit  
- Personalized welcome message after submitting name  
- Users can **interact with tasks, moods, habits, and view the summary**

---

## 🚀 Features

- **✅ Tasks Management**: Add, remove, and view tasks. Tasks are saved in **localStorage** for persistence.  
- **😊 Mood Tracker**: Select your current mood using emojis. Mood is saved across sessions.  
- **💪 Habits Tracker**: Toggle daily habits on/off. Habits completion is persisted.  
- **📊 Summary Card**: Dynamic overview of tasks, habits completed, and current mood, with motivational messages.  
- **🎨 Modern UI Design**: Responsive cards with hover effects, soft gradients, and premium feel. Clean, intuitive layout for desktop.  
- **📝 Personalized Experience**: Users are welcomed by name and the dashboard remembers their input using **localStorage**.

---

## 🛠 Tech Stack

- **Frontend**: React + JSX  
- **Styling**: CSS  
- **State & Persistence**: React `useState`, `useEffect` + `localStorage`  
- **Tooling**: Vite for fast development and build  

---

## 💻 Installation & Running Locally

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/digital-life-dashboard.git
cd digital-life-dashboard
npm install
npm run dev

digital-life-dashboard/
│
├─ src/
│  ├─ components/
│  │  ├─ TasksCard.jsx
│  │  ├─ MoodCard.jsx
│  │  ├─ HabitsCard.jsx
│  │  └─ SummaryCard.jsx
│  ├─ App.jsx
│  └─ App.css
│
├─ package.json
└─ vite.config.js


