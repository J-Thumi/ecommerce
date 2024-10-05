import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styles from './Login.module.css'

const Login = () => {

    const[name,setName]=useState()
    const[password,setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/login",{name,password})
        .then(result=>{console.log(result)
            if(result.data==="success"){
                navigate('/home')
            }
            else if(result.data==="incorrect password"){
                alert('incorrect password')
            }
            else{
              alert('No sush user')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className={styles.body}>
    <div className={styles.wrapper}>
    <h2>Login</h2>
    <form action="#" onSubmit={handleSubmit}>
      <div className={styles.input}>
        <input type="text" placeholder="Enter your name" 
        onChange={(e)=>setName(e.target.value)}
        required/>
      </div>
      
      <div className={styles.input}>
        <input type="password" placeholder="Create password" 
        onChange={(e)=>setPassword(e.target.value)}required/>
      </div>
      
      <div className={styles.policy}>
        <input type="checkbox"/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div className={styles.button}>
        <Link to='/'>
        <input type="Submit" value="Login"
        
        /></Link>
      </div>
      <div className={styles.text}>
        <h3>Do not have an account? <Link to='/sign'>Sign in</Link></h3>
      </div>
    </form>
  </div>
  </div>
  )
}

export default Login
