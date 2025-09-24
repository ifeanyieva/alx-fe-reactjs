import { useState } from "react";

function Counter() {
  // Initialize count state at 0
  const [count, setCount] = useState(0);

  // Handlers for buttons
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Counter</h2>

      <button onClick={increment}>Increase</button>
      <button 
        onClick={decrement} 
        style={{ marginLeft: "10px" }}
      >
        Decrease
      </button>
      <button 
        onClick={reset} 
        style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}
      >
        Reset
      </button>

      {/* Display element showing the current count */}
      <p style={{ marginTop: "15px", fontSize: "18px" }}>
        Current Count: {count}
      </p>
    </div>
  );
}

export default Counter;

