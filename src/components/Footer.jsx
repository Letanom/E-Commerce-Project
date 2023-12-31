import React from 'react';
import { FaFacebook,FaInstagram,FaLinkedin } from 'react-icons/fa';
import footerpic from "../assets/img/payment.png"
const Footer = () => {
  return (
   
      <footer className="py-4 text-center">
  
      
  
          <div className='footer-wrap'>
           <h5>Subscribe and get discount</h5>
              <p>Get the opportunity to win discount coupons every month.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-3">
                <label htmlFor="newsletter1" className="visually-hidden">Email Adres</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Your Mail" />
                <button className="btn btn-danger" type="button">Subscribe</button>
              </div>
          </div>
   
        <img style={{margin:"15px"}} src={footerpic}></img>
       
          <p>© 2023 Shopping World , All Rights Reserved.</p>

          
          
   
 
      </footer>
  
  );
};

export default Footer;
