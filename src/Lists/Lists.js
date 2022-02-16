import React, { useEffect, useState } from 'react';
import '../App.css';

export default function Lists() {
  const [nums, setNums] = useState([1, 2, 3]);

  const [count, setCount] = useState(1);

  useEffect(() => {
    addNumber();
  }, [count]);

  useEffect(() => {
    addNumber();

    return () => {
      console.log('Will unmount');
    }
  }, []);
  

  const addNumber = () => {
    setNums([...nums, 4]);
  }
  
  return (
    <div className="App">
      <div className='container'>
        <ul className='mb-4'>
         {nums.map((item, i) => (
            <li key={i}>{item}</li>
         ))}
        </ul>
        <button onClick={addNumber} className='btn btn-primary'>Click me</button>
        <button onClick={() =>  setCount(count + 1)} className='btn btn-primary'>Click me {count}</button>
      </div>
    </div>
  );
}
