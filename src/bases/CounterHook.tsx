import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
  
  const { counterEffect, elementToAnimate, handleClick } = useCounter({
    maxCount: 15
  });

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={ elementToAnimate }>{ counterEffect }</h2>

      <button onClick={ handleClick }>+1</button>
    </>
  );
}
