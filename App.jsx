import { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [sum, setSum] = useState(null);

  const findSum = () => {
    const n = Number(num);

    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }

    setSum(total);
  };

  return (
    <div>
      <h2>Sum of N Numbers</h2>

      <input
        type="number"
        placeholder="Enter N"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <button onClick={findSum}>
        Calculate Sum
      </button>

      <h3>{sum !== null ? `Sum = ${sum}` : ""}</h3>
    </div>
  );
}

export default App;