import React, { useRef, useEffect, ReactNode, FC } from 'react'
import styles from './index.module.scss'

interface Props {
  title?: string
  children: ReactNode
}
const Page:FC<Props> = ({ title, children }) => {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    pageRef.current?.scrollIntoView()
  })

  return (
    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        { title && <h1 className={styles['page__title']}>{title}</h1>}
        <div className={styles['page__body']}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Page