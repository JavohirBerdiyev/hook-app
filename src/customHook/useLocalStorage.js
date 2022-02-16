import React, { useEffect, useState } from 'react'

export default function useLocalStorage(intitalState, key) {
  const get = () => {
    const storage = localStorage.getItem(key);
    
    return storage ? +storage : intitalState;
  };
  
  const [value, setValue] = useState(get);

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value])

  return [value, setValue];
}
