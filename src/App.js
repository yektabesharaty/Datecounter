import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setstep] = useState(1);
  const [count, setcount] = useState(0);

  const date = new Date("june 21 2027");

  date.setDate(date.getDate() + count);

  function handlestep1() {
    setstep(step - 1);
  }
  function handlestep2() {
    setstep(step + 1);
  }
  function handlecount1() {
    setcount(count - step);
  }
  function handlecount2() {
    setcount(count + step);
  }

  return (
    <div className="App">
      <div className="button">
        <button onClick={handlestep1}>-</button>
        <p>Step :{step}</p>
        <button onClick={handlestep2}>+</button>
      </div>
      <div className="button">
        <button onClick={handlecount1}>-</button>
        <p>Count: {count}</p>
        <button onClick={handlecount2}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? `Today is ${date.toDateString()}`
            : count > 0
            ? `${count} days from today is ${date.toDateString()}`
            : `${Math.abs(count)} days ago was ${date.toDateString()} `}
        </span>
      </p>
    </div>
  );
}
