// import React from 'react'
import savoilLogo from '../images/logo/savoil-logo.png';

export const navbar = () => {
  return (
    <nav >
      <header className="site-header">
        <div className="container-x d-flex align-items-center justify-content-between gap-3">
          <a className="brand" href="/index.php" aria-label="Savoil India home">
           <img
              src={savoilLogo}
              alt="Savoil India logo"
            />
            {/* <span className="brand-text">
          <strong>SAVOIL INDIA</strong>
          <span>Oleochemical Solutions</span>
        </span>  */}
          </a>
          <nav className="nav-x d-none d-lg-flex" aria-label="Primary">
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/products">Our Products</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
          </nav>
          <div className="d-flex align-items-center gap-2">
            <a
              href="/contact.php"
              className="btn-x btn-sm-x d-none d-lg-inline-flex"
            >
              Enquire Now
            </a>
            <button
              className="burger d-lg-none"
              type="button"
              data-drawer-open
              aria-label="Open menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* <!-- MOBILE DRAWER --> */}
      <div className="mobile-drawer" id="mobileDrawer">
        <div className="drawer-top">
          <img
            src={savoilLogo}
            alt="Savoil India logo"
            width="228"
            height="145"
            className="image-width-nav-1"
          />
          <button
            className="drawer-close"
            type="button"
            data-drawer-close
            aria-label="Close menu"
          >
            &#10005;
          </button>
        </div>
        <nav aria-label="Mobile">
          <a href="/index">Home</a>
          <a href="/about">About</a>
          <a href="/products">Our Products</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="drawer-foot">
          <p className="mb-2 drawer-color">Corporate Office</p>
          <p className="mb-0 drawer-color-mobile">
            First Floor #50, Homeland Enclave, Goniana Road, Bathinda 151001,
            Punjab, India
          </p>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
