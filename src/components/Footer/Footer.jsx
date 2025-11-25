import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
          <div className='footer-content-left'>
              <img src={assets.logo} alt='' />
              <p>Learn all about how to implement font using the API CSS code. A web font is any font used in a website’s design that isn’t installed by default on the end user’s device—a counterpart to a system font. Check out the articles below for more guidance:</p>
              <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt='' />
                <img src={assets.twitter_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />
              </div>
          </div>
          <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
                <li>Home</li>
                <li>About Us</li>
               <li>Delivery</li>
               <li>Privacy Policy</li>   
            </ul>
          </div>
          <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                  <li>+234-81066***-**</li>
                  <li>breaktruuchenna@gmail.com</li>
                </ul>
          </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 20225 &copy; DABIZ_EATZ.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
