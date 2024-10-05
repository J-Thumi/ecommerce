import React, { useState, useEffect } from 'react'
import Contact from '../Main/Contact'
import Footer from '../Main/Footer'
import Navbar from '../Main/Navbar'
import styles from '../Main/Elec.module.css'
import axios from 'axios'




const Fence = (prop) => {
  const [goods,setGoods]=useState([])
  const [loading,setLoading]=useState(false)

 

useEffect(()=>{
  setLoading(true)
  axios.get('http://localhost:3000/electronics')
  .then((data)=>{
  console.log(data.data)
      setGoods(data.data)
      setLoading(false)
  })
  .catch(err=>console.log(err))
  
},[])
 
  return (
    <div>
        <Navbar/>
        <h1>Fence</h1>
        <div className={styles.videos}>
        {loading ? 'Loading...' : goods.map((goods)=>(
            
<a href="#" className={styles.card}>
    <div className="thumbnailContainer">
        <img src={goods.image} alt="Thumbnail" className={styles.thumbnail}/>
       
    </div>
    <div className={styles.info}>

     
        <div className={styles.details}>
        <h2 className={styles.title}>{goods.subtitle}</h2>
        <p className={styles.channel}>{goods.shortDescription}</p>
        <p className={styles.views}>{goods.longDescription}</p>
        <h3>{goods.price}</h3>
        </div>
    </div>
    </a> 
))}
    </div>
      <Contact/>
    <Footer/>
     
    </div>
  )
}

export default Fence
