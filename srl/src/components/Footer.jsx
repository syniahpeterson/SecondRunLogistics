// Footer with company info, social links, and copyright
import React from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company contact and registration info */}
        <div className="footer-info">
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+13477696906">(347) 769-6906</a> or{" "}
            <a href="tel:+13479276162">(347) 927-6162</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:qasim@secondrunlogistics.com">
              qasim@secondrunlogistics.com
            </a>
          </p>
          <p>
            <strong>USDOT:</strong> 4046143
          </p>
          <p>
            <strong>MC#:</strong> 1532202
          </p>
        </div>

        {/* Social media links */}
        <div className="footer-social">
          <a
            href="https://x.com/secondrun1986"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.facebook.com/people/Qasim-Fells/pfbid0cz5xn1Yc13sb5cYKQz2NvpcBV765e93wuoXyYTBhFaRynzCDxoaasM6A6Zt8eijUl/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/secondrunlogistics/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@secondrunlogistics"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.snapchat.com/@secondrun1986?invite_id=xspXZxfh&locale=en_US&share_id=uWmH3elVQVmecfaveOY1Fw&sid=cb725f423c2640d4ae30aba05d368606"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Snapchat"
          >
            <FaSnapchatGhost />
          </a>
          <a
            href="https://www.linkedin.com/in/secondrunlogistics/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Divider line */}
      <div className="footer-divider" />

      {/* Copyright notice */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Second Run Logistics. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
