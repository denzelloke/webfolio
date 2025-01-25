import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT ME</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/chipIcon.png")} alt="Cursor icon" 
            style = {{height: 200, padding: 20}} />
            <div className={styles.aboutItemText}>
              <h3>Computer Engineer</h3>
              <p>
                My passion lies in computer architecture, embedded 
                systems and robotics.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cxIcon.png")} alt="Server icon" 
            style = {{height: 200, padding: 20}} />
            <div className={styles.aboutItemText}>
              <h3>Client Facing</h3>
              <p>
                I have much experience in Customer Relations, Sales, and Complaint
                Resolution.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/codingIcon.png")} alt="UI icon" 
            style = {{height: 200, padding: 20}} />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                In my spare time, I enjoy learning and building projects to expand my skillset.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
