import React from "react";
import styles from "../componentsCard2/Card2.module.css"; // ✅ to‘g‘ri import

export default function Card2() {
  return (
    <div>
      <section className={styles.ctaSection}>
        <div className={`${styles.container} ${styles.ctaContent}`}>
          <h1 className={styles.advanBoost}>Boost your links today</h1>
          <button className={styles.advanBoostBtn}>
            <a className={styles.heroBtnA} href="#">
              Get Started
            </a>
          </button>
        </div>
      </section>
    </div>
  );
}
