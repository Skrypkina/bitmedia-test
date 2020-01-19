import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paragraph.module.css';

const Paragraph = ({ firstName, lastName }) => (
  <div className={styles.container}>
    <p className={styles.paragrahp}>
      Main page > Users statistics >
      <span className={styles.span}>
        {firstName} {lastName}
      </span>
    </p>
  </div>
);

Paragraph.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

export default Paragraph;
