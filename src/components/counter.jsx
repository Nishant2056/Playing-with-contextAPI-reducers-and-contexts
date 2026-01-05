import { useContext } from "react";
import { counterContext } from "../store/Store.jsx";
import { useState } from "react";
const Counter = () => {
  const { count, handleIncrement, handleDecrement, handleReset, handlePower } =
    useContext(counterContext);
  const [powerValue, setPowerValue] = useState("");
  return (
    <center>
      <button
        type="button"
        style={{ marginRight: "10px" }}
        onClick={handleDecrement}
      >
        -
      </button>
      <span>{count}</span>
      <button
        type="button"
        style={{ marginLeft: "10px" }}
        onClick={handleIncrement}
      >
        +
      </button>

      <button
        type="button"
        style={{ marginLeft: "10px" }}
        onClick={() => {
          handlePower(Number(powerValue));
          if (powerValue === "") {
            alert("Please enter a number to power with");
          }
        }}
      >
        Power
      </button>
      <input
        type="number"
        style={{ marginLeft: "10px" }}
        placeholder="Power with what number"
        value={powerValue}
        onChange={(e) => setPowerValue(Number(e.target.value))}
      />
      <button
        type="button"
        style={{ marginLeft: "10px" }}
        onClick={() => {
          handleReset();
          setPowerValue("");
        }}
      >
        Reset
      </button>
    </center>
  );
};

export default Counter;
