import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styles from './Sign.module.css'

const Sign = () => {

  const [name,setName]=useState()
  const[email, setEmail]=useState()
  const[password, setPassword]=useState()
  const[confirmPassword,setConfirmPassword]=useState()

const navigate=useNavigate()


  const handleSubmit=(e)=>{
    e.preventDefault()
   axios.post('http://localhost:3000/sign',{name,email,password,confirmPassword})
   .then((result=>{
    console.log(result.data)
    if(result.data==='user added successfully'){
      navigate('/login')
    }
    else{
      alert('password confirm do not match ')
    }
   }))
   .catch((err)=>{
    console.log(err)
   })
  }

  return (
    <div className={styles.body}>
    <div className={styles.wrapper}>
    <h2>Registration</h2>
    <form action="#" onSubmit={handleSubmit}>
      <div className={styles.input}>
        <input type="text" placeholder="Enter your name" 
        onChange={(e)=>setName(e.target.value)}
        required/>
      </div>
      <div className={styles.input}>
        <input type="text" placeholder="Enter your email" 
        onChange={(e)=>setEmail(e.target.value)}
        required/>
      </div>
      <div className={styles.input}>
        <input type="password" placeholder="Create password" 
        onChange={(e)=>setPassword(e.target.value)

        }required/>
      </div>
      <div className={styles.input}>
        <input type="password" placeholder="Confirm password" 
        onChange={(e)=>setConfirmPassword(e.target.value)}
        required/>
      </div>
      <div className={styles.policy}>
        <input type="checkbox"/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div className={styles.button}>
        <input type="Submit" value="Register Now"
        />
      </div>
      <div className={styles.text}>
        <h3>Already have an account? <Link to='/login'>Login</Link></h3>
      </div>
    </form>
  </div>
  </div>
  )
}

export default Sign
