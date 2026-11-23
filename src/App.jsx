import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((currentCount) => currentCount + 1);
  }

  function decreaseCount() {
    setCount((currentCount) => currentCount - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <main className="page">
      <section className="counter-card">
        <p className="eyebrow">REACT BEGINNER PROJECT 01</p>
        <h1>Counter App</h1>
        <p className="subtitle">
          A simple app to practice React state and click events.
        </p>
        <div className="counter-display" aria-live="polite">{count}</div>
        <div className="button-row">
          <button className="button secondary" onClick={decreaseCount}>− Decrease</button>
          <button className="button primary" onClick={increaseCount}>+ Increase</button>
        </div>
        <button className="button reset" onClick={resetCount}>Reset counter</button>
        <p className="status">
          {count === 0 ? "Your counter is ready." : count > 0 ? "You're counting up!" : "Your counter is below zero."}
        </p>
      </section>
      <footer>Built with React + Vite · Learning project</footer>
    </main>
  );
}
