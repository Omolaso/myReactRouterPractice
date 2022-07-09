import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    let navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }

  return (
    <div>
        <h1>Error 404</h1>
        <h3>Something went wrong</h3>
        <button onClick={goHome}>Back to Homepage</button>
    </div>
  )
}

export default Error