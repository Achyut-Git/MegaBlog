import React, {useState} from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'

function Login() {
    
        const [userName, setUsername] = useState('')
        const [password, setPassword] = useState('')

        const {setUser} = useContext(userContext)

    const handleSubmit = (e)=>{
         e.preventDefault();

         setUser({userName, password})
    }


  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Username' value={userName} onChange={(e)=> setUsername(e.target.value)} /> {' '}
        <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button onClick={handleSubmit}> Submit </button>
    </div>
  )
}

export default Login