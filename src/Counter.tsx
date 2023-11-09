import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <span>Burns</span>
      <span>This is an awesome counter!</span>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
