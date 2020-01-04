import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.footerContainer}>
    {/* svg */}
    <div className={styles.svg}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: '100%', width: '100%' }}
      >
        <path
          // path
          path="true"
          d="M-7.89,26.14 C111.17,171.20 290.63,-46.88 501.69,83.38 L500.56,-1.47 L-1.69,-3.45 Z"
          style={{ stroke: 'none', fill: 'white' }}
        ></path>
      </svg>
    </div>
    {/* svg */}
    <form className={styles.inputForm}>
      <input
        type="email"
        name="email"
        className={styles.input}
        placeholder="Enter your email..."
      />
      <button type="submit" className={styles.submitBtn}>
        Subscribe
      </button>
    </form>
    <div className={styles.paragraphContainer}>
      <p className={styles.title}>AppCo</p>
      <p className={styles.paragraph}>All rights reserved by ThemeTags</p>
      <p className={styles.paragraph}>Copyrights&copy;2019</p>
    </div>
  </div>
);

export default Footer;
