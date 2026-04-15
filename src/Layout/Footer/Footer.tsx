
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-container">

        <div className="footer-box">
          <h2>CarePlus Hospital</h2>
          <p>Providing quality healthcare services with care and trust.</p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <p>About Us</p>
          <p>Doctors</p>
          <p>Services</p>
          <p>Appointments</p>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>
          <p>Delhi, India</p>
          <p>+91 98765 43210</p>
          <p>24/7 Emergency</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CarePlus Hospital | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;