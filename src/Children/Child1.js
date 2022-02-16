import React, { useContext } from 'react'
import { CountContent } from '../App';
import Child2 from './Child2';

const Child1 = () => {
  const count = useContext(CountContent);

  return (
    <div>Child1 {count}  <Child2 /></div>
  )
}

export default Child1;
