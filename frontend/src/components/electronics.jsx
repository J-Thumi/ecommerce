import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Electronics = () => {

    const[el,setEl]=useState()


    const fet=()=>{useEffect(()=>{
    axios.get("http://localhost:3000")
    .then(res=>{
        setEl(res)
        console.log(res)

    })
    .catch(err=>{
        console.log(err)
    })
},[])}
  return (
    <div>
     
    </div>
  )
}

export default Electronics
