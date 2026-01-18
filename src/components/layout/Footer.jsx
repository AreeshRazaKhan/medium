import React from "react";

const Footer = ({ background = "#fff" }) => {
  return (
    <>
      <footer
        className="py-6 px-5 border-t border-[#242424]"
        style={{ backgroundColor: background }}
      >
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <ul className="flex items-center justify-center gap-4 footerlinks">
              <li>
                <a href="#" className="footer-link">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Rules
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
