import React from 'react'
import styles from './Navbar.module.css'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
    <nav className={styles.nav}>
          <input type="checkbox" id="check" className={styles.check}/>
          <label for="check" className={styles.checkbtn}>
            <i className={styles.bars} ><IoMdMenu/></i>
            <i className={styles.cancel}><IoClose/></i>
          </label>
    
          <label className={styles.logo}>Navigation</label>
    
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </nav>
        <div className={styles.search}>
        
        <div className={styles.wrapper}>
        <div className={styles.list}>
          <button className={styles.button}>All</button>
          <button className={styles.button}>CCTV</button>
          <button className={styles.button}>Phone accessories</button>
          <button className={styles.button}>Cables</button>
          </div>
        </div>
        <span>
        <form action="#" className={styles.form}>
            <input type="search" placeholder="Search" className={styles.input} />
            <button className={styles.searchButton}>
              <i >< FaSearch/></i>
            </button>
          </form>
          </span>
        </div>
        </>
  )
}

export default Navbar
