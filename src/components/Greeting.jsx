function Greeting() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <h1 className="greeting">
      {getGreeting()}, Sisipho
    </h1>
  );
}

export default Greeting;