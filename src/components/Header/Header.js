import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import image from '../../images/mobile.png';

const Header = () => (
  <div className={styles.headerContainer}>
    <p className={styles.paragraph}>AppCo</p>
    <p className={styles.title}>
      <span className={styles.span}>Brainstorming</span> for desired perfect
      Usability
    </p>
    <p className={styles.descr}>
      Our design projects are fresh and simple and will denefit your business
      greatly.Learn more about our work
    </p>
    <Link to="/stats" className={styles.link}>
      View Stats
    </Link>
    {/* svg */}
    <div className={styles.svg}>
      <svg
        viewBox="0 0 500 250"
        preserveAspectRatio="none"
        style={{ height: '100%', width: '100%' }}
      >
        <path
          path="true"
          // path
          d="M-2.82,63.64 C247.74,337.98 259.02,-153.45 502.25,53.78 L500.00,150.00 L-2.25,157.39 Z"
          style={{ stroke: 'none', fill: 'white' }}
        ></path>
      </svg>
    </div>
    {/* svg */}
    {/* iphone */}

    <div className={styles.iphoneContainer}>
      <img src={image} alt="iphone" className={styles.iphoneImg} />
    </div>

    {/* iphone */}
  </div>
);

export default Header;
