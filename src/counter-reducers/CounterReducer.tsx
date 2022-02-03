import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/CounterReducer";

import * as actions from "./actions/actions";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handlerReset = () => {
    dispatch(actions.doReset());
  };

  const incrementBy = (value: number = 1) => {
    dispatch(actions.doIncrementBy(value));
  };

  return (
    <>
      <h1>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </h1>
      <hr />
      <button onClick={handlerReset}>reset</button>
      <button onClick={() => incrementBy(1)}>+1</button>
      <button onClick={() => incrementBy(5)}>+5</button>
      <button onClick={() => incrementBy(10)}>+10</button>
    </>
  );
};
