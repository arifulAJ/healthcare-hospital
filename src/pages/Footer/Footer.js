import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer row row-cols-sm-1 row-cols-lg-4 text-center mx-auto ">
            <div className="py-3">
                <img  src="https://mpng.subpng.com/20180728/xcp/kisspng-health-care-public-health-medicine-hospital-cupped-hands-5b5bed5c4cf652.0198420915327511963153.jpg" alt="" /><span style={{fontWeight:"bolder"}}>health cheek</span>
            </div>
          <div className="py-3">
              <h3 >we are always beside you </h3>
          <h6 > Dont't <i class="fas fa-copyright"></i>copyright from here </h6>
         
          </div>
          <div   className="px-3 py-3">
              <h3>connect with us</h3>
              <a href='#'>  <i  class="fab fa-facebook"></i> </a>
              <a href='#'>   <i  class="fab fa-twitter"></i> </a>
              <a href='#'>   <i class="fab fa-skype"></i> </a>
              <a href='#'>   <i class="fab fa-instagram-square"></i> </a>
              
          </div>
          
           
        </div>
    );
};

export default Footer;