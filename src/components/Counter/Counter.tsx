import React, { useContext, useEffect, useState } from 'react';
import { useActiveEffect, useDeactiveEffect } from '../KeepLive/KeepAliveContext';

interface CounterProps {
  name: string;
}

export const Counter: React.FC<CounterProps> = ({ name }) => {
  const [count, setCount] = useState(0);
  console.log(`Counter ${name} rendered`);


  useActiveEffect(() => {
    console.log(`Counter ${name} active mounted`);
  })

  useDeactiveEffect(() => {
    console.log(`Counter ${name} deactive unmounted`);
  })

  useEffect(() => {
    console.log(`Counter ${name} mounted`);
    return () => {
      console.log(`Counter ${name} unmounted`);
    }
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '10px' }}>
      <h2>Counter {name}</h2>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '8px'
        }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(0)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Reset
      </button>
    </div>
  );
};
