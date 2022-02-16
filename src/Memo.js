import React, { useMemo, useState } from 'react';
import './App.css';

function complate(number) {
  console.log('Complate');
  let i = 0;
  while(i < 100000000) i++
  return number * 2;
}

function Memo() {
  const [num, setNum] = useState(1);

  const complated = useMemo(() => {
    return complate(num);
  }, [num]);

  return (
    <div>
      <div className='d-flex'>
        <button className='btn btn-danger' onClick={() => setNum((prev) => prev -1)}>-</button>
        <h2>{num}</h2>
        <button className='btn btn-primary' onClick={() => setNum((prev) => prev +1)}>+</button>
      </div>
     
    </div>
  );
}

export default Memo;