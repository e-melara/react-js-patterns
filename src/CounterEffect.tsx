import gsap from "gsap";
import { useEffect, useState, useRef } from "react";

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
  const [counterState, setCounterState] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handlerClick = () => {
    setCounterState(Math.min(counterState + 1, MAXIMUM_COUNT));
  };

  useEffect(() => {
    if (counterState < 10) return;
    const tl = gsap.timeline();

    tl.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      easing: "easeInOut",
    });

    tl.to(counterElement.current, {
      y: 0,
      duration: 1,
      easing: "bounceOut",
    });
  }, [counterState]);

  return (
    <>
      <h1>Counter</h1>
      <h2 ref={counterElement}>{counterState}</h2>
      <button onClick={handlerClick}>+1</button>
    </>
  );
};
