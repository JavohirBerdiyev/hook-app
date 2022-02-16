import React, { useCallback, useState } from 'react';
import useTheme from '../customHook/useTheme';
import MoveList from '../MoveList/MoveList';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [count, setCount] = useState(1);

  const generateItem = useCallback(() => {
    return new Array(count).fill('index').map((_,index) => `Element ${index + 1}`)
  }, [count])
  
  return (
    <div>  
      <button onClick={() => setCount(count + 1)}>toggleTheme</button>     
      <MoveList getItmes={generateItem} />
    </div>
  );
}

export default App;
