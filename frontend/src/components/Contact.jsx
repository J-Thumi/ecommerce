import React from 'react'
import styles from './Contact.module.css'
import { FaEnvelope } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaClock } from "react-icons/fa";
const Contact = () => {
  return (
    <section className={styles.contact} >
    <h2 className={styles.section_title}>Contact Us</h2>
    <div className={styles.section_container}>
      <div className={styles.contact_container}>
        <div className={styles.contact_form}>
          <form action="#">
            <div className={styles.field}>
              <label for="Name">Full Name</label>
              <input type="text" id="Name" placeholder="Your Name" required />
            </div>
            <div className={styles.field}>
              <label for="email">Your Email</label>
              <input
                type="text"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className={styles.field}>
              <label for="number">Your Number</label>
              <input
                type="number"
                id="number"
                placeholder="Your Contact Number"
                required
              />
            </div>
            <div className={styles.field}>
              <label for="textarea">Textarea</label>
              <textarea
                name="textarea"
                id="textarea"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className={styles.button} id="submit">Submit</button>
          </form>
        </div>
        <div className={styles.contact_text}>
          <div className={styles.contact_items}>
            <i><CiLocationOn/></i>
            <div className={styles.contact_details}>
              <h3>Our Location</h3>
              <p>Juja , Kenya

              </p>
            </div>
          </div>
          <div className={styles.contact_items}>
            <i ><FaEnvelope/></i>
            <div className={styles.contact_details}>
              <h3>General Enquries</h3>
              <p>joscoffeeshop@xyz.com</p>
            </div>
          </div>
          <div className={styles.contact_items}>
            <i><IoIosCall/></i>
            <div className={styles.contact_details}>
              <h3>Call Us</h3>
              <p>+2540701071662</p>
            </div>
          </div>
          <div className={styles.contact_items}>
            <i><FaClock/></i>
            <div className={styles.contact_details}>
              <h3>Our Timing</h3>
              <p>Mon-Sun : 10:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact
