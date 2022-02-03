import gsap from "gsap";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

export const useCounter = ({ maximum_count = 10 }) => {
  const [counterState, setCounterState] = useState(1);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const tl = useRef(gsap.timeline());

  const handlerClick = () => {
    setCounterState(Math.min(counterState + 1, maximum_count));
  };

  useLayoutEffect(() => {
    tl.current
      .to(counterElement.current, {
        y: -10,
        duration: 0.2,
        easing: "ease-in-out",
      })
      .to(counterElement.current, { y: 0, duration: 1, ease: "bounceOut" })
      .pause();
  }, []);

  useEffect(() => {
    // if (counterState >= maximum_count) {
    //   tl.current.play(0);
    // }
    tl.current.play(0)
  }, [counterState]);

  return {
    counterState,
    handlerClick,
    elementToAnimate: counterElement,
  };
};
