import React from 'react'
import Contact from '../Main/Contact'
import Footer from '../Main/Footer'
import Navbar from '../Main/Navbar'
import styles from '../Main/Elec.module.css'
import holder from '../images/hold.jpg'
const Gate = (prop) => {
   const {dev}=prop
  return (
    <div>
        <Navbar/>
        <h1>Gate</h1>
        <div className={styles.videos}>
        {dev.map((dev)=>(
            
<a href="#" className={styles.card}>
    <div className="thumbnailContainer">
        <img src={holder} alt="Video Thumbnail" className={styles.thumbnail}/>
       
    </div>
    <div className={styles.info}>
        <img src={holder} alt="Channel Logo" className={styles.icon}/>
        <div className={styles.details}>
        <h2 className={styles.title}>{dev.subtitle}</h2>
        <p className={styles.channel}>{dev.publisher}</p>
        <p className={styles.views}>{dev.title}</p>
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

export default Gate
