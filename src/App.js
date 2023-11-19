import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [calc, setCalc] = useState("");

  const createNumbers = () => {
    const numbers = [];

    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button onClick={() => insert(i.toString())} key={i} className="button">
          {i}
        </button>
      );
    }

    return numbers;
  };

  const insert = (value) => {
    setCalc(calc + value);
  };

  const calculateResult = () => {
    setCalc(eval(calc).toString());
  };

  const deleteItem = () => {
    if (calc == "") {
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };
  const deleteAll = () => {
    setCalc("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">{calc || 0}</div>

        <div className="contents">
          {createNumbers()}
          <button onClick={() => insert("/")} className="button">
            /
          </button>
          <button onClick={() => insert("*")} className="button">
            x
          </button>
          <button onClick={() => insert("-")} className="button">
            -
          </button>
          <button onClick={() => insert("+")} className="button">
            +
          </button>

          <button onClick={deleteItem} className="button">
            C
          </button>
          <button onClick={() => insert("0")} className="button">
            0
          </button>
          <button onClick={() => insert(".")} className="button">
            .
          </button>
          <button onClick={deleteAll} className="button">
            A
          </button>
          <button onClick={calculateResult} className="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
