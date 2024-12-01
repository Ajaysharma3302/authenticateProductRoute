import { useState } from "react";

import axios from "axios"

import { useNavigate } from "react-router-dom";


const Login =()=>{
    const [email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [error,setError] = useState('')
    const navigate= useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if (!email || !password) {
            setError("Please fill in both fields.");
            return;
          }
        try {
            const response = await axios.post('https://reqres.in/api/login',{
                email,
                password,
            })
            if(response.data.token){
                localStorage.setItem("token",response.data.token)
                navigate('/products')
            }
        } catch (error) {
            console.error(error.response)
            setError('Login failed. Please check your credentials.');
        }
    }
return(
    <>
    <div>
        <h1>Login</h1>
        {error && <p style={{color:"red"}}>{error}</p>}
        <form onSubmit={handleSubmit}>
        <input type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        
        
        />
     <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>

        </form>
    </div>
    
    </>
)

}


export default Login