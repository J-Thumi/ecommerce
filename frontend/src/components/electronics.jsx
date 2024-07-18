

import { useState } from 'react'
import styles from './Elec.module.css'
const Electronics = () => {

 

  return (
    <>
    <div className={styles.videos}>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">10:03</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>Top 10 Easy To Create JavaScript Games For Beginners</h2>
                <p className={styles.channel}>CodingNepal</p>
                <p className={styles.views}>27K Views • 4 months ago</p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">23:45</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/uITV5E7auiZMDD_BwhVRJMHXXY6qQc0GqBgVyP5LWYTmeRlUP2Dc945UlIbODvztd96ReOts=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>How to make Responsive Card Slider in HTML CSS & JavaScript</h2>
                <p className={styles.channel}>CodingLab</p>
                <p className={styles.views}>42K Views • 1 year ago</p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/YEloDYy3DTg/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">29:43</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>Create A Responsive Website with Login & Registration Form in HTML CSS and JavaScript</h2>
                <p className={styles.channel}>CodingNepal</p>
                <p className={styles.views}>68K Views • 9 months ago</p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/hSSdc8vKP1I/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">38:45</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>Build Hangman Game in HTML CSS and JavaScript</h2>
                <p className={styles.channel}>CodingNepal</p>
                <p className={styles.views}>57K Views • 11 months ago</p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/coj-l7IrwGU/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">19:27</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>How to Make Chrome Extension in HTML CSS & JavaScript</h2>
                <p className={styles.channel}>CodingNepal</p>
                <p className={styles.views}>24K Views • 1 year ago</p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/6QE8dXq9SOE/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">16:24</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>Create A Draggable Card Slider in HTML CSS and Vanilla JavaScript</h2>
                <p className={styles.channel}>CodingNepal</p>
                <p className={styles.views}>14.2K Views • 4 days ago</p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/q4RgxiDM6v0/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">37:13</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/uITV5E7auiZMDD_BwhVRJMHXXY6qQc0GqBgVyP5LWYTmeRlUP2Dc945UlIbODvztd96ReOts=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>How to make Responsive Image Slider in HTML CSS and JavaScript</h2>
                <p className={styles.channel}>CodingLab</p>
                <p className={styles.views}>1M Views • 1 year ago</p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/DLs1X9T1GcY/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">9:27</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>Create Text Typing Effect in HTML CSS & Vanilla JavaScript</h2>
                <p className={styles.channel}>CodingNepal</p>
                <p className={styles.views}>17K Views • 10 months ago</p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/PsNaoDhzQm0/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">25:27</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>Create Responsive Image Slider in HTML CSS and JavaScript</h2>
                <p className={styles.channel}>CodingNepal</p>
                <p className={styles.views}>157K Views • 9 months ago</p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/20Qb7pNMv-4/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">12:24</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/uITV5E7auiZMDD_BwhVRJMHXXY6qQc0GqBgVyP5LWYTmeRlUP2Dc945UlIbODvztd96ReOts=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>Make A Flipping Card UI Design in HTML & CSS</h2>
                <p className={styles.channel}>CodingLab</p>
                <p className={styles.views}>85K Views • 2 months ago</p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/_RSaI2CxlXU/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">30:20</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>Easy way to do Multiple File Uploading using HTML CSS and JavaScript</h2>
                <p className={styles.channel}>CodingNepal</p>
                <p className={styles.views}>7.4K Views • 3 weeks ago</p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/cHkN82X3KNU/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">11:13</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/uITV5E7auiZMDD_BwhVRJMHXXY6qQc0GqBgVyP5LWYTmeRlUP2Dc945UlIbODvztd96ReOts=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>Build A Responsive Calculator in HTML CSS & JavaScript</h2>
                <p className={styles.channel}>CodingLab</p>
                <p className={styles.views}>30K Views • 2 years ago</p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/0_Lwi5ucGwM/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">39:43</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>Build A Currency Converter using ReactJS</h2>
                <p className={styles.channel}>CodingNepal</p>
                <p className={styles.views}>7.2K • 2 weeks ago</p>
              </div>
            </div>
          </a>
          <a href="#" className={styles.card}>
            <div className="thumbnailContainer">
              <img src="https://i.ytimg.com/vi/AyV954yKRSw/maxresdefault.jpg" alt="Video Thumbnail" className={styles.thumbnail}/>
              <p className="duration">1:37:13</p>
            </div>
            <div className={styles.info}>
              <img src="https://yt3.googleusercontent.com/uITV5E7auiZMDD_BwhVRJMHXXY6qQc0GqBgVyP5LWYTmeRlUP2Dc945UlIbODvztd96ReOts=s176-c-k-c0x00ffffff-no-rj" alt="Channel Logo" className={styles.icon}/>
              <div className={styles.details}>
                <h2 className={styles.title}>Responsive Admin Dashboard Panel in HTML CSS and JavaScript</h2>
                <p className={styles.channel}>CodingLab</p>
                <p className={styles.views}>161K Views • 1 year ago</p>
              </div>
            </div>
          </a>
        </div>
    
    </>
    
  )
}

export default Electronics
