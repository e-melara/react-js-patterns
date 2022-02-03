import { useCounter } from "./hooks/useCounter";

export const CounterHooks = () => {
  const { elementToAnimate, handlerClick, counterState } = useCounter({
    maximum_count: 15,
  });

  return (
    <>
      <h1>Counter</h1>
      <h2 ref={elementToAnimate}>{counterState}</h2>
      <button onClick={handlerClick}>+1</button>
    </>
  );
};
