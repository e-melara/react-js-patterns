import { useState } from "react";

interface CounterProps {
  initialValue: number;
}

interface CounterState {
  count: number;
  clicks: number;
}

export const Counter = ({ initialValue }: CounterProps) => {
  const [{ count, clicks }, setCounter] = useState<CounterState>({
    count: initialValue,
    clicks: 0,
  });

  const handlerClick = (aumento: number) => {
    setCounter((state: CounterState) => ({
      count: state.count + aumento,
      clicks: state.clicks + 1,
    }));
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <h1>Clicks: {clicks}</h1>
      <button onClick={() => handlerClick(1)}>+1</button>
      <button onClick={() => handlerClick(5)}>+5</button>
    </>
  );
};
