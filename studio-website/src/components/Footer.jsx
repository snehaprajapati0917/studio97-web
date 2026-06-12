import "../css/footer.css"
import { Link } from "react-router-dom"

import {
FaInstagram,
FaFacebookF,
FaYoutube,
FaWhatsapp
}
from "react-icons/fa"
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-logo">
          <h1>STUDIO 97</h1>
          <span>PHOTOGRAPHY</span>
        </div>

        <div className="footer-links">

          <h3>QUICK LINKS</h3>

          <div className="link-row">

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/contact">Contact</Link>

          </div>

        </div>

        <div className="footer-social">

<h3>FOLLOW US</h3>

<div className="social-icons">

<a
href="https://instagram.com/studio_97__"
target="_blank"
rel="noopener noreferrer"
>
<FaInstagram/>
</a>

<a
href="https://facebook.com/Studio 97"
target="_blank"
rel="noopener noreferrer"
>
<FaFacebookF/>
</a>

<a
href="https://youtube.com/@studio_97__"
target="_blank"
rel="noopener noreferrer"
>
<FaYoutube/>
</a>

<a
href="https://wa.me/9023163044"
target="_blank"
rel="noopener noreferrer"
>
<FaWhatsapp/>
</a>

</div>
</div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Studio 97. All Rights Reserved.
        </p>

        <p>
          🤍 Made with passion
        </p>

      </div>

    </footer>
  );
}

export default Footer;