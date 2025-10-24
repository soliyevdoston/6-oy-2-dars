import React from "react";
import styles from "./Card1.module.css";
import combainedshape from "../assets/Combined Shape.svg";
import combainedshape2 from "../assets/Combined Shape (1).svg";
import shape from "../assets/Shape.svg";

export default function Card1() {
  return (
    <div className={styles.advan}>
      <div className={`${styles.advanced} container`}>
        <div className={styles.advancedSta}>
          <h3 className={styles.advancedStaH2}>Advanced Statistics</h3>
          <p className={styles.advancedStaP}>
            Track how your links are performing across the web with <br />
            our advanced statistics dashboard.
          </p>
        </div>

        <div className={styles.advancedWrap}>
          <div className={styles.line}></div>

          <ul className={styles.advancedMenyu}>
            <li>
              <div className={styles.section1}>
                <div className={styles.section1Img}>
                  <img src={combainedshape} alt="Brand Recognition" />
                </div>
                <h4 className={styles.sectionH4}>Brand Recognition</h4>
                <p className={styles.sectionP}>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </li>

            <li>
              <div className={styles.section2}>
                <div className={styles.section2Img}>
                  <img src={combainedshape2} alt="Detailed Records" />
                </div>
                <h4 className={styles.sectionH4}>Detailed Records</h4>
                <p className={styles.sectionP}>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </li>

            <li>
              <div className={styles.section3}>
                <div className={styles.section3Img}>
                  <img src={shape} alt="Fully Customizable" />
                </div>
                <h4 className={styles.sectionH4}>Fully Customizable</h4>
                <p className={styles.sectionP}>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
