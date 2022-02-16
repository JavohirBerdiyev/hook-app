import React, { useEffect, useRef, useState } from 'react';
import useFetch from '../customHook/useFetch';

function Product() {
  const a = JSON.parse(localStorage.getItem('count')) ? (JSON.parse(localStorage.getItem('count'))) : 1;
  const [count, setCount] = useState(a);
  const {data, loading} = useFetch(count);

  const newRef = useRef(() => console.log('ahil bolinglar'));

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    newRef.current();
  }, [count])

  return (
    <div className="App">
      <div className='container'>
        <button onClick={() => setCount((prev) => prev +1)}>Count ++</button>
         <h2>{loading ? 'Loading...' : data}</h2>
      </div>
    </div>
  );
}

export default Product;
