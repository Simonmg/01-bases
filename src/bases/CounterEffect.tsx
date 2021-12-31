import { useState, useEffect } from 'react';

const MAXIMUN_NUM = 10;

export const CounterEffect = () => {
  const [counterEffect, setCounterEffect] = useState(5);
  
  const handleClick = () => {
    setCounterEffect( prev => prev + 1);
  }

  useEffect(() => {
    if (counterEffect <= 10) return;

    console.log('%cvalor maximo', 'color: red: background-color: black');

    return () => console.log('clean');
  }, [counterEffect]);


  return (
    <>
      <h1>Counter: { counterEffect }</h1>

      <button onClick={ handleClick }>+1</button>
    </>
  );
}
