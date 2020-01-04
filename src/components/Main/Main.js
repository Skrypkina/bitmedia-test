import React from 'react';
import styles from './Main.module.css';
import tassels from '../../images/tassels.png';
import computer from '../../images/computer.png';
import lock from '../../images/lock.png';
import macbook from '../../images/macbook.png';

const Main = () => (
  <div className={styles.mainContainer}>
    <p className={styles.title}>
      Why <span className={styles.span}>small business owners love</span> AppCo?
    </p>
    <p className={styles.descr}>
      Our design projects are fresh and simple and will benefit your business
      greatly.Learn more about our work
    </p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <img src={tassels} alt="tassels" className={styles.listItemImg} />
        <p className={styles.listItemTitle}>Clean Design</p>
        <p className={styles.listItemDescr}>
          Increase sales by showing true dynamics of your website.
        </p>
      </li>
      <li className={styles.listItem}>
        <img src={lock} alt="lock" className={styles.listItemImg} />
        <p className={styles.listItemTitle}>Secure Data</p>
        <p className={styles.listItemDescr}>
          Build your online store&apos;s trust using Social Proof & Urgency.
        </p>
      </li>
      <li className={styles.listItem}>
        <img src={computer} alt="computer" className={styles.listItemImg} />
        <p className={styles.listItemTitle}>Retina Ready</p>
        <p className={styles.listItemDescr}>
          Realize importance of social proof in customer&apos;s purchase
          decision
        </p>
      </li>
    </ul>
    <div className={styles.content}>
      <p className={styles.contentTitle}>
        Start Managing your apps business, more faster
      </p>
      <p className={styles.contentDescr}>
        Objectively deliver professional valuy with divers web-readiness.
        Collaboratively transition wireless customer service without
        goal-oriented catalysts for change. Collaboratively.
      </p>
      <button type="button" className={styles.contentBtn}>
        Learn more
      </button>
    </div>
    {/* computer image */}
    <div className={styles.macbookContainer}>
      <img src={macbook} alt="macbook" className={styles.macbookImg} />
    </div>
  </div>
);

export default Main;
