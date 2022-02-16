import React, { useEffect, useRef, useState } from 'react'
import useForm from '../customHook/useForm';

export default function Form() {
  const initialState = {
    text: '',
    password: ''
  }

  const buttonRef = useRef(null);
  const inputRef = useRef(null);


  const [ values, inputHandler ] = useForm(initialState);
  const [ count, setCount ] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    if(!values.text) {
      inputRef.current.focus();
    } else {
      console.log(values);
    }
  }
  useEffect(() => {
    console.log(buttonRef.current);
  }, [count])
  

  return (
    <div>
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">Email address {values.text}</label>
        <input ref={inputRef} onChange={inputHandler} value={values.text} type="text" name='text' className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password {values.password}</label>
        <input onChange={inputHandler} value={values.password} type="password" name='password' className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary mb-2">Submit</button>
    </form>

    <button ref={buttonRef} onClick={() => setCount(count + 1)} className="btn btn-primary">Button {count}</button>
    </div>
    
  )
}
