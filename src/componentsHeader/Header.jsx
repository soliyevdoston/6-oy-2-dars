import React from "react";
import shortlyimg from "../assets/Shortly.svg";
import group from "../assets/Group.svg";
import styles from "../componentsHeader/Header.module.css";

export default function Header() {
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.headerMenyu}>
        <img
          className={styles.headerLogo}
          src={shortlyimg}
          alt="Shortly logo"
        />

        <nav>
          <ul className={styles.headerUl}>
            <li>
              <a className={styles.headerA} href="#">
                Features
              </a>
            </li>
            <li>
              <a className={styles.headerA} href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className={styles.headerA} href="#">
                Resources
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.login}>
        <a className={styles.headerA} href="#">
          Login
        </a>

        <a className={styles.headerBtn} href="#" role="button">
          <span className={styles.headerSing}>Sign up</span>
        </a>
      </div>

      <div className={styles.group}>
        <img src={group} alt="decorative group" />
      </div>
    </header>
  );
}
