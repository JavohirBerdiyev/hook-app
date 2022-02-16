import React, { useEffect, useRef, useState } from 'react'

export default function useFetch(urlNumber) {
  
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true} );

  useEffect(() => {
    return ()=> {
      isCurrent.current = false;
    }
  },[])

  useEffect(async () => {
    await fetch(`http://numbersapi.com/${urlNumber}`)
      .then((result) => result.text())
      .then((data) => {
        setTimeout(() => {
          if(isCurrent.current) {
            setState({data, loading: false});
          }
        }, 1000)
      })
      .catch((err) => {
        console.log(err);
      });
}, [urlNumber]);


  return state;
}
