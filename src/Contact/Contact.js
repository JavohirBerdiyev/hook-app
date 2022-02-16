import React from 'react'
import useForm from '../customHook/useForm';

export default function Contact({setFirstName, setLastName}) {
  const ins = {
    firstName: '',
    lastName: ''
  }
  const [values, setValue] = useForm(ins);

  
 
  const formHandler = (e) => {
    e.preventDefault();
  }

  return (
      <form onSubmit={formHandler}>
        <div className="mb-3">
          <label className="form-label">First name</label>
          <input onChange={setValue} value={values.firstName} type="text" name='firstName' className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Last name</label>
          <input onChange={setValue} value={values.lastName}  type="text" name='lastName' className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

  )
}
