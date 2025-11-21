import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo">
              <Logo size="lg" />
            </div>
            <p className="footer-description">
              Leading new technologies for green transformation. KEICO PLUS is
              committed to realizing carbon reduction with core technologies of
              the 4th Industrial Revolution.
            </p>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">
                  경기도 파주시 광인사길 103
                </span>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} className="footer-contact-icon" />
                <div className="footer-contact-text">
                  <p>Tel: 02-6739-0125</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">info@keicoplus.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="footer-link">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/news" className="footer-link">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-section-title">Services</h3>
            <ul className="footer-links">
              <li>
                <Link href="/products" className="footer-link">
                  Smart Grid Solutions
                </Link>
              </li>
              <li>
                <Link href="/products" className="footer-link">
                  EPC Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="footer-link">
                  Energy Management
                </Link>
              </li>
              <li>
                <Link href="/products" className="footer-link">
                  Renewable Energy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} KEICO PLUS. All rights reserved.
          </p>
          <div className="footer-bottom-right">
            <div className="footer-legal">
              <Link href="#" className="footer-legal-link">
                Privacy Policy
              </Link>
              <Link href="#" className="footer-legal-link">
                Terms of Service
              </Link>
            </div>
            {/* Social Media Icons */}
            <div className="footer-social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link footer-social-facebook"
                aria-label="Facebook"
              >
                <FaFacebook size={14} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link footer-social-instagram"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://www.kakaocorp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link footer-social-kakao"
                aria-label="KakaoTalk"
              >
                <SiKakaotalk size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
