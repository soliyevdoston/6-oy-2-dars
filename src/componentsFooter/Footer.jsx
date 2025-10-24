import React from "react";
import styles from "../componentsFooter/Footer.module.css";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/tvitter.svg";
import ppp from "../assets/ppp.svg";
import insta from "../assets/insta.svg";

export default function Footer() {
  return (
    <footer className={styles.myFooter}>
      <div className={`${styles.footer1} container`}>
        <div className={styles.footerLogo}>
          <h2>Shortly</h2>
        </div>

        <div className={styles.footerDiv}>
          <ul className={styles.footerUl}>
            <li>
              <a className={styles.footerLi1} href="#">
                Features
              </a>
            </li>
            <li>
              <a className={styles.footerLi} href="#">
                Link Shortening
              </a>
            </li>
            <li>
              <a className={styles.footerLi} href="#">
                Branded Links
              </a>
            </li>
            <li>
              <a className={styles.footerLi} href="#">
                Analytics
              </a>
            </li>
          </ul>

          <ul className={styles.footerUl}>
            <li>
              <a className={styles.footerLi1} href="#">
                Resources
              </a>
            </li>
            <li>
              <a className={styles.footerLi} href="#">
                Blog
              </a>
            </li>
            <li>
              <a className={styles.footerLi} href="#">
                Developers
              </a>
            </li>
            <li>
              <a className={styles.footerLi} href="#">
                Support
              </a>
            </li>
          </ul>

          <ul className={styles.footerUl}>
            <li>
              <a className={styles.footerLi1} href="#">
                Company
              </a>
            </li>
            <li>
              <a className={styles.footerLi} href="#">
                About
              </a>
            </li>
            <li>
              <a className={styles.footerLi} href="#">
                Our Team
              </a>
            </li>
            <li>
              <a className={styles.footerLi} href="#">
                Careers
              </a>
            </li>
            <li>
              <a className={styles.footerLi} href="#">
                Contact
              </a>
            </li>
          </ul>

          <ul className={styles.footerTarmoq}>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src={facebook} alt="facebook" />
            </li>
            <li data-aos="fade-up" data-aos-duration="2000">
              <img src={twitter} alt="twitter" />
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              <img src={ppp} alt="pinterest" />
            </li>
            <li data-aos="fade-up" data-aos-duration="500">
              <img src={insta} alt="instagram" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
