import React from "react";

import styles from "./Hero.module.css";
import  {getImageUrl}  from "../../utils";

const Hero = () => {
  const handleDownloadCV = () => {
    // Replace 'cv.pdf' with the path to your actual CV file
    const downloadUrl = getImageUrl("hero/sparsh resume.pdf");
    window.open(downloadUrl, "_blank");
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sparsh Singh Chundawat</h1>
        <p className={styles.description}>
        I'm a full-stack Web developer with Expertise in DSA with JAVA. Passionate Learner Eager to Expand Skills and Contribute to Company's Growth.
        </p>
        <div className={styles.buttons}>
            <button className={styles.contactBtn}>
              <a
                className={styles.newanchortag}
                href="mailto:singhsparsh2003@gmail.com"
              >
                Contact Me
              </a>
            </button>
            
            <button className={styles.contactBtn} onClick={handleDownloadCV}>
              Download CV
            </button>
          </div>

      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
