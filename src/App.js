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
  function handleReset() {
    setstep(1);
    setcount(0);
  }

  return (
    <div className="App">
      <div className="button">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          //با هربار تغیر عدد توی اون رنجه مقدارشو میگیره و تغییر میکنه

          onChange={(e) => setstep(Number(e.target.value))}
        />

        {/* <button onClick={handlestep1}>-</button> */}
        <p>Step :{step}</p>
        {/* <button onClick={handlestep2}>+</button> */}
      </div>
      <div className="button">
        <button onClick={handlecount1}>-</button>
        {/* <p>Count: {count}</p> */}

        <input
          type="text"
          value={count}
          onChange={(e) => setcount(Number(e.target.value))}
        />
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
      {/* وقتی میخایم از یا اند استفاده کنیم باید از شرطی کردن ؟ استفاده کنیم نه && */}
      {step !== 1 || count !== 0 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
