import React from 'react';
import { FaFacebook,FaInstagram,FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
   
      <footer className="py-4 text-center">
  
      
  
          <div className='footer-wrap'>
           <h5>Abone olup bültenden haberler al</h5>
              <p>Her ay indirim kuponları  kazanma fırsatı  yakala.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-3">
                <label htmlFor="newsletter1" className="visually-hidden">Email Adresi</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Mail adresiniz" />
                <button className="btn btn-danger" type="button">Abonelik</button>
              </div>
          </div>
   
        <img style={{margin:"15px"}} src='./src/assets/img/payment.png'></img>
       
          <p>© 2023 Teknoloji Dünyası , Bütün Hakları Saklıdır.</p>

          
          
   
 
      </footer>
  
  );
};

export default Footer;
