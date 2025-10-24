import React from "react";
import styles from "../componentsHero/Hero.module.css";
import working from "../assets/working_with_computer.svg";

export default function Hero() {
  return (
    <div className={`${styles.hero} ${styles.container}`}>
      <div className={styles["hero-more"]}>
        <h1 className={styles["hero-h1"]}>More than just shorter links</h1>

        <p className={styles["hero-p"]}>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <button className={styles["hero-btn"]}>
          <a className={styles["hero-btn-a"]} href="#">
            Get Started
          </a>
        </button>
      </div>

      <div className={styles["hero-img-wrapper"]}>
        <img
          className={styles["hero-img"]}
          src={working}
          alt="Working with computer"
        />
      </div>
    </div>
  );
}
