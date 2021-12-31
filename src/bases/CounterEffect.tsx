import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const MAXIMUN_NUM = 10;

export const CounterEffect = () => {
  const [counterEffect, setCounterEffect] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounterEffect( prev => Math.min(prev + 1, MAXIMUN_NUM));
  }

  useLayoutEffect(() => {
    if (counterEffect < 10) return;

    
    const tl = gsap.timeline();

    tl.to(counterElement.current,{y: -10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });

  }, [counterEffect]);


  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={ counterElement }>{ counterEffect }</h2>

      <button onClick={ handleClick }>+1</button>
    </>
  );
}
