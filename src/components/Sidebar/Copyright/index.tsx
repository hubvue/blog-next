import React, { FC } from 'react'
import styles from './index.module.scss'

interface Props {
  copyright: string
}
const Copyright:FC<Props> = ({ copyright }) => (
  <div className={styles['copyright']}>
    {copyright}
  </div>
)

export default Copyright
