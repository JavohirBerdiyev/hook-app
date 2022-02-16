import React, { useState } from 'react'

export default function useForm(initialState) {
  const [values, setValue] = useState(initialState);

  return [
    values, 
    (e) => {
      setValue({...values, [e.target.name]: e.target.value});
    },
  ];
};
