import React, { useEffect } from 'react'
import styles from './Navbar.module.css'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
    {/* <header className={styles.header}> */}
      <nav className={styles.navbar}>
            <span className={styles.hamburger}>
              <IoMdMenu/>
            </span>
            <a href="#" className={styles.logo}>
                <img src="lloggggg.jpeg" alt="logo"/>
                <h2>Circuit City
                    
                </h2>
            </a>
            <ul className={styles.links}>
                <span className={styles.close}><IoClose/></span>
                <li><a href="#">Home</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">      </a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#contact">Contact us</a></li>
            </ul>
            <Link to='/login'>
            <button className={styles.login}>LOG IN</button>
            </Link>
        </nav>
    {/* </header> */}
    
    <div className={styles.wrapper}>
        <div className={styles.list}>
          <Link to='/all'><button className={styles.button} >Shop</button></Link>
          <Link to='/cctv'><button className={styles.button} >CCTV Cameras</button></Link>
          <Link to='/cables'><button className={styles.button}>Networking</button></Link>
          <Link to='/ladders'><button className={styles.button} >Ladder</button></Link>
          <Link to='/alarm'><button className={styles.button} >Alarm System</button></Link>
          <Link to='/fence'><button className={styles.button} >Electric Fence</button></Link>
          <Link to='/gate'><button className={styles.button} >Gate Automation</button></Link>
         
         
          </div>
        </div>

        
        {/* <div className={styles.search}> */}
        
        
        {/* <span>
        <form action="#" className={styles.form}>
            <input type="search" placeholder="Search" className={styles.input} />
            <button className={styles.searchButton}>
              <i >< FaSearch/></i>
            </button>
          </form>
          </span> */}
        {/* </div> */}
        </>
  )
}

export default Navbar
