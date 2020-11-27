import React, { FC } from 'react'
import { withPrefix, Link } from 'gatsby'
import styles from './index.module.scss'

interface Author {
  name: string
  bio: string
  photo: string
}
interface Props {
  author: Author
  isIndex?: boolean
  
}
const Author:FC<Props> = ({ author, isIndex }) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    { isIndex === true ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h2>
    )}
    <p className={styles['author__subtitle']}>{author.bio}</p>
  </div>
)

export default Author
