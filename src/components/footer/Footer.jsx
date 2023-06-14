import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Introduction</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials" data-aos="zoom-in">
       <a href="https://facebook.com"><FaFacebookF/></a>
       <a href="https://instagram.com"><FiInstagram/></a>
       <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nicholas Rouse. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer