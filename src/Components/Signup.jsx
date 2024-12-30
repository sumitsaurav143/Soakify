import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

export const Signup = () => {

  const { state, dispatch } = useContext(AppContext);

  const loginuser = () => {
    // Inside some component
    dispatch({ type: 'SET_USER', payload: { name: 'Sumit!' } });

  }

  return (

    <button onClick={()=>loginuser()}>SignUp</button>
  )
}
