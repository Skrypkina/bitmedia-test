import React from 'react';
import basic from '../../images/basic.png';
import standart from '../../images/standart.png';
import unlimited from '../../images/unlimited.png';
import styles from './PricingSection.module.css';

const PricingSection = () => (
  <div className={styles.pricingSectionContainer}>
    <p className={styles.title}>
      <span className={styles.titleSpan}>Afforadble Pricing and Packages</span>{' '}
      choose your best one
    </p>
    <p className={styles.descr}>
      Monotonectally grow strategic process improvements vis-a-vis integrated
      resources
    </p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <p className={styles.listItemTitle}>Basic</p>
        <img src={basic} alt="basic" className={styles.listItemImg} />
        <p className={styles.listItemPrice}>29$</p>
        <div className={styles.listItemDescr}>
          <p className={styles.listItemDescrParagraph}>Push Notifications</p>
          <p className={styles.listItemDescrParagraph}>Data Transfer</p>
          <p className={styles.listItemDescrParagraph}>SQL Database</p>
          <p className={styles.listItemDescrParagraph}>
            Search & SEO analytics
          </p>
          <p className={styles.listItemDescrParagraph}> 24/7 Phone Support</p>
          <p className={styles.listItemDescrParagraph}>
            2 months technical support
          </p>
          <p className={styles.listItemDescrParagraph}>
            2 + profitable keyword
          </p>
        </div>
        <button className={styles.listItemBtn}>Purchase now</button>
      </li>
      <li className={styles.listItem}>
        <p className={styles.listItemTitle}>Standart</p>
        <img src={standart} alt="starndart" className={styles.listItemImg} />
        <p className={styles.listItemPrice}>
          <span className={styles.listItemSpan}>149$</span>
        </p>
        <div className={styles.listItemDescr}>
          <p className={styles.listItemDescrParagraph}>Push Notifications</p>
          <p className={styles.listItemDescrParagraph}>Data Transfer</p>
          <p className={styles.listItemDescrParagraph}>SQL Database</p>
          <p className={styles.listItemDescrParagraph}>
            Search & SEO analytics
          </p>
          <p className={styles.listItemDescrParagraph}> 24/7 Phone Support</p>
          <p className={styles.listItemDescrParagraph}>
            2 months technical support
          </p>
          <p className={styles.listItemDescrParagraph}>
            2 + profitable keyword
          </p>
        </div>
        <button className={styles.listItemBtn}>Purchase now</button>
      </li>
      <li className={styles.listItem}>
        <p className={styles.listItemTitle}>Unlimited</p>
        <img src={unlimited} alt="unlimited" className={styles.listItemImg} />
        <p className={styles.listItemPrice}>39$</p>
        <div className={styles.listItemDescr}>
          <p className={styles.listItemDescrParagraph}>Push Notifications</p>
          <p className={styles.listItemDescrParagraph}>Data Transfer</p>
          <p className={styles.listItemDescrParagraph}>SQL Database</p>
          <p className={styles.listItemDescrParagraph}>
            Search & SEO analytics
          </p>
          <p className={styles.listItemDescrParagraph}> 24/7 Phone Support</p>
          <p className={styles.listItemDescrParagraph}>
            2 months technical support
          </p>
          <p className={styles.listItemDescrParagraph}>
            2 + profitable keyword
          </p>
        </div>
        <button className={styles.listItemBtn}>Purchase now</button>
      </li>
    </ul>
    <p className={styles.contactParagraph}>
      If you need custom services or Need more?
      <span className={styles.contactSpan}>Contact us</span>
    </p>
    <div className={styles.circle}></div>
  </div>
);

export default PricingSection;
