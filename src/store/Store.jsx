import { createContext, useReducer } from "react";

export const counterContext = createContext();

const initialState = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        count: state.count++,
      };
    }
    case "DECREMENT": {
      return {
        count: state.count--,
      };
    }
    case "RESET": {
      return initialState;
    }
    case "POWER": {
      return {
        count: state.count ** action.payload,
      };
    }
  }
};

const CounterStore = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const handlePower = (num) => {
    dispatch({ type: "POWER", payload: num });
  };

  return (
    <counterContext.Provider
      value={{
        count: state.count,
        handleIncrement,
        handleDecrement,
        handleReset,
        handlePower,
      }}
    >
      {children}
    </counterContext.Provider>
  );
};

export default CounterStore;
