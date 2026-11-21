// import React from 'react';
// import PropTypes from 'prop-types';

import savoilLogo from '../images/logo/savoil-logo.png';


const footer = props => {
  return (
    <footer className="site-footer">
  <div className="container-x">
    <div className="row g-5">
      <div className="col-lg-4">
        <div className="footer-brand mb-4"><img src={savoilLogo} alt="Savoil India logo"
            width="228" height="145" loading="lazy"/></div>
        <p className="footer-desc text-white">
          Savoil India supplies oleochemical raw materials — fatty acid distillates, fatty acids, refined glycerine
          and
          soap noodles — to manufacturers in India and international markets.
        </p>
        <div className="social-x mt-4">
          <a href="#" aria-label="LinkedIn (placeholder)">In</a>
          <a href="#" aria-label="Facebook (placeholder)">Fb</a>
          <a href="#" aria-label="X (placeholder)">X</a>
        </div>
      </div>
      <div className="col-6 col-lg-2">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/index.php">Home</a></li>
          <li><a href="/about.php">About</a></li>
          <li><a href="/products.php">Our Products</a></li>
          <li><a href="/gallery.php">Gallery</a></li>
          <li><a href="c/ontact.php">Contact</a></li>
        </ul>
      </div>
      <div className="col-6 col-lg-2">
        <h4>Products</h4>
        <ul>
          <li><a href="/products.php#cat-distillates">Fatty Acid Distillates</a></li>
          <li><a href="/products.php#cat-fatty-acids">Fatty Acids</a></li>
          <li><a href="/products.php#cat-glycerine">Refined Glycerine</a></li>
          <li><a href="/products.php#cat-soap-noodles">Soap Noodles</a></li>
        </ul>
      </div>
      <div className="col-lg-4 ">
        <h4>Contact</h4>
        <ul>
          <li className="mt-3 text-white"><strong className='text-white' >Phone No.</strong><br/><a href="+916280171440" className="pb-0 mb-0">+91-6280-171-440</a></li>
          <li className="mt-3"><strong className='text-white'>Email</strong><br/>savoilindia@gmail.com</li>
          <li><strong className='text-white'>Address </strong><br/>K No 677, Joganand Road, Vill Gill Patti 151201,
            Bathinda &ndash; Punjab, India</li>
            {/* <!-- <li><strong style="color:#fff">Warehouse</strong><br>K No 677, Joganand Road, Vill Gill Patti 151201,
            Bathinda &ndash; Punjab, India</li> -->
          <!-- <li className="mt-3"><strong style="color:#fff">Corporate Office</strong><br>First Floor # 50, Homeland Enclave,
            Goniana Road, Bathinda 151001, Punjab, India</li> --> */}

        </ul>
        {/* <!-- <form className="news-form mt-4" novalidate>
          <input type="email" required placeholder="Your email for updates" aria-label="Email address">
          <button type="submit">Send</button>
        </form> --> */}
      </div>
    </div>
    <div className="footer-sep d-flex flex-column flex-md-row justify-content-between gap-2">
      <span>&copy; <span id="year">2026</span> Savoil India. All rights reserved.</span>
      <span className="d-flex gap-4"><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a></span>
    </div>
  </div>
</footer>


  );
};



export default footer ;
