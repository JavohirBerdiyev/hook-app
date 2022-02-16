import React, { useEffect, useState } from 'react'

export default function useRandomJoke(firstName, lastName) {
  const [joke, setJoke] = useState('');

  useEffect(async () => {
      await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
        .then((result) => result.json())
        .then((data) => {
          setJoke(data.value.joke);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [firstName, lastName]);

  return joke;
}
