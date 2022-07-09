import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';


const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const setNameHandler = (e) => {
        setName(e.target.value)
    }
    const setEmailHandler = (e) => {
        setEmail(e.target.value)
    }

    const goToDashboard = (e) => {
        e.preventDefault();
        if(!name || !email){
            alert('Please input name and email')
        }else{
            navigate('/Dashboard');
        }

        setUser({
            name: name,
            email: email,
        });
    }

  return (
    <div>
        <form onSubmit={goToDashboard}>
            <label htmlFor='name'>Name:</label><br/>
            <input type="text" value={name} onChange={setNameHandler}/><br/>
            <label htmlFor='email'>Email:</label><br/>
            <input type="email" value={email} onChange={setEmailHandler}/><br/>
            <button>Sign in</button>
        </form>
    </div>
  )
}

export default Login