import { IconType } from '../../types'
import React, { FC } from 'react'
import styles from './index.scss'
interface Props {
  name: string
  icon: Partial<IconType>
}
const Icon:FC<Props> = ({ name, icon }) => (
  <svg className={styles['icon']} viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
)

export default Icon
