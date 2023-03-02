import React, { useState, useEffect } from 'react';

export default function Display() {
  const [count, setCount] = useState(0);
  const [temp, setTemp] = useState(68)

  // When the state changes run this callback
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    console.log(count)
    localStorage.setItem('myCount', count);

  },[count]);
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    document.title =`${temp}º F`

  },[temp]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>Current temp: {temp}</p>
      <code>check localStorage in developer console</code>
      <hr />
      <button type="button" onClick={handleIncrease}>
        Click me
      </button>
      <button type="button" onClick={()=>setTemp(temp+1)}>
        bump the heat!
      </button>
    </div>
  );
}
