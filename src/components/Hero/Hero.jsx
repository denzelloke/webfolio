import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Denzel</h1>
        <p className={styles.description}>
          Welcome to my webfolio! <br/>
          Each of my projects holds special importance to me, 
          I am proud of the learning and growth they have given me, but I am far from satisfied. <br/>
          My favourite project will always be my next one! <br/><br/>
          This webfolio serves as an interactive medium for me to showcase these projects.<br />
          Don't hesitate to contact me for more information :)
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
