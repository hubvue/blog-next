import React from 'react';
import styles from './index.scss';

const Copyright = ({ copyright }) => (
  <div className={styles['copyright']}>
    {copyright}
  </div>
);

export default Copyright;
