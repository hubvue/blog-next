import React, { FC } from 'react'
import styles from './index.scss'
interface Props {
  body: string
  title: string
}
const Content:FC<Props> = ({ body, title }) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
)

export default Content
