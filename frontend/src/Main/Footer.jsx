import React from 'react'
import styles  from './Footer.module.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section_container}>
        <div className={styles.footer_section}>
          <div className={styles.footer_logo}>
            <a href="index.html">
              <img src="coffeee.jpg" alt="Coffee Logo" />
              <h2>Coffee</h2>
            </a>
          </div>
          <div className={styles.useful_links}>
            <h3>Useful Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#why">Why Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className={styles.contact_us}>
            <h3>Contact</h3>
            <ul>
              <li>
                {/* <i className={styles.bx bx-current-location}></i> */}
                <span>Juja ,Kenya</span>
              </li>
              <li>
                {/* <i className="bx bxs-phone-call"></i>  */}
                <span>+254701071662</span>
              </li>
              <li>
                {/* <i className="bx bxs-time-five"></i> */}
                <span>Mon-Sun : 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
          <div className={styles.follow_us}>
            <h3>Follow</h3>
           
            <a href=""><FaXTwitter /></a>
            <a href=""><FaFacebookSquare /></a>
            <a href=""><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
