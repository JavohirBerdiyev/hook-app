import React, { useContext } from 'react';
import { CountContent } from '../App';

const Child5 = () => {

  const count = useContext(CountContent);
  return (
    <div>
      Child5 {count}
    </div>
  );
};

export default Child5;