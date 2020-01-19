import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StatsHeader.module.css';

const StatsHeader = () => (
  <div className={styles.container}>
    <p className={styles.logo}>
      <Link to="/" className={styles.link}>
        AppCo
      </Link>
    </p>
  </div>
);

export default StatsHeader;
