import React, { FC } from 'react';
import styles from './index.scss';
interface Props {
  date: string
}

const Meta:FC<Props> = ({ date }) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Published {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
  </div>
)

export default Meta
